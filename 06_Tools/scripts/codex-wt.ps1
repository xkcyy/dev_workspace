[CmdletBinding()]
param(
    [string]$SourceDir = (Get-Location).Path,

    [string]$OutputDir = [Environment]::GetFolderPath([System.Environment+SpecialFolder]::DesktopDirectory),

    [switch]$CurrentOnly,

    [string]$NamePrefix = 'codex',

    [switch]$Force,

    [switch]$PrintOnly
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Resolve-ExistingDirectory {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    $resolvedPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Path)

    if (-not (Test-Path -LiteralPath $resolvedPath)) {
        throw "目录不存在: $resolvedPath"
    }

    $item = Get-Item -LiteralPath $resolvedPath
    if (-not $item.PSIsContainer) {
        throw "路径不是目录: $resolvedPath"
    }

    return $item.FullName
}

function Resolve-OrCreateDirectory {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    $resolvedPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Path)

    if (Test-Path -LiteralPath $resolvedPath) {
        $item = Get-Item -LiteralPath $resolvedPath
        if (-not $item.PSIsContainer) {
            throw "路径不是目录: $resolvedPath"
        }

        return $item.FullName
    }

    $item = New-Item -ItemType Directory -Path $resolvedPath -Force
    return $item.FullName
}

function Expand-DirectoryPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    return $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Path)
}

function Get-RequiredCommandPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    $command = Get-Command $Name -ErrorAction SilentlyContinue
    if (-not $command) {
        throw "未找到命令: $Name"
    }

    return $command.Source
}

function ConvertTo-PowerShellSingleQuotedLiteral {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Text
    )

    return $Text -replace "'", "''"
}

function ConvertTo-SafeFileName {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    $invalidChars = [System.IO.Path]::GetInvalidFileNameChars()
    $safeName = $Name

    foreach ($char in $invalidChars) {
        $safeName = $safeName.Replace($char, '_')
    }

    $safeName = $safeName.Trim().TrimEnd('.')
    if ([string]::IsNullOrWhiteSpace($safeName)) {
        return 'workspace'
    }

    return $safeName
}

function Get-DirectoryLabel {
    param(
        [Parameter(Mandatory = $true)]
        [string]$DirectoryPath
    )

    $label = Split-Path -Leaf $DirectoryPath
    if ([string]::IsNullOrWhiteSpace($label)) {
        return 'workspace'
    }

    return $label
}

function Get-TargetDirectories {
    param(
        [Parameter(Mandatory = $true)]
        [string]$ResolvedSourceDir,

        [switch]$UseCurrentOnly
    )

    if ($UseCurrentOnly) {
        return @(Get-Item -LiteralPath $ResolvedSourceDir)
    }

    $childDirectories = @(Get-ChildItem -LiteralPath $ResolvedSourceDir -Directory | Sort-Object Name)
    if ($childDirectories.Count -gt 0) {
        return $childDirectories
    }

    return @(Get-Item -LiteralPath $ResolvedSourceDir)
}

function Get-LauncherBaseName {
    param(
        [Parameter(Mandatory = $true)]
        [string]$NamePrefix,

        [Parameter(Mandatory = $true)]
        [string]$SourceLabel,

        [Parameter(Mandatory = $true)]
        [string]$TargetLabel
    )

    $parts = @($NamePrefix)

    if ($SourceLabel -ne $TargetLabel) {
        $parts += $SourceLabel
    }

    $parts += $TargetLabel

    return (ConvertTo-SafeFileName -Name ($parts -join ' - '))
}

function Get-UniqueLauncherPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$OutputDirectory,

        [Parameter(Mandatory = $true)]
        [string]$BaseName,

        [Parameter(Mandatory = $true)]
        [hashtable]$NameRegistry
    )

    $registryKey = $BaseName.ToLowerInvariant()
    if ($NameRegistry.ContainsKey($registryKey)) {
        $NameRegistry[$registryKey]++
    }
    else {
        $NameRegistry[$registryKey] = 1
    }

    $suffix = $NameRegistry[$registryKey]
    if ($suffix -gt 1) {
        $BaseName = '{0} ({1})' -f $BaseName, $suffix
    }

    return Join-Path $OutputDirectory ($BaseName + '.cmd')
}

function New-LauncherContent {
    param(
        [Parameter(Mandatory = $true)]
        [string]$TargetDirectory,

        [Parameter(Mandatory = $true)]
        [string]$WindowTitle
    )

    $escapedTargetDirectory = ConvertTo-PowerShellSingleQuotedLiteral -Text $TargetDirectory
    $escapedWindowTitle = ConvertTo-PowerShellSingleQuotedLiteral -Text $WindowTitle

    $launcherScript = @(
        ('$targetDir = ''{0}''' -f $escapedTargetDirectory)
        ('$title = ''{0}''' -f $escapedWindowTitle)
        ('$codexCommand = "Set-Location -LiteralPath ''{0}''; codex"' -f $escapedTargetDirectory)
        '$wtArguments = @('
        "    '-w'"
        "    'new'"
        "    'new-tab'"
        "    '--title'"
        '    $title'
        "    '-d'"
        '    $targetDir'
        "    'powershell.exe'"
        "    '-NoExit'"
        "    '-Command'"
        '    $codexCommand'
        ')'
        '& wt.exe @wtArguments'
    ) -join "`n"

    $encodedCommand = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($launcherScript))

    return @(
        '@echo off'
        'setlocal'
        ('powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -EncodedCommand {0}' -f $encodedCommand)
    ) -join "`r`n"
}

function Write-LauncherFile {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,

        [Parameter(Mandatory = $true)]
        [string]$Content,

        [switch]$Overwrite
    )

    if ((Test-Path -LiteralPath $Path) -and -not $Overwrite) {
        throw "文件已存在，请使用 -Force 覆盖: $Path"
    }

    Set-Content -LiteralPath $Path -Value $Content -Encoding ASCII
}

$null = Get-RequiredCommandPath -Name 'wt.exe'
$null = Get-RequiredCommandPath -Name 'codex'

$resolvedSourceDir = Resolve-ExistingDirectory -Path $SourceDir
$resolvedOutputDir = if ($PrintOnly) {
    Expand-DirectoryPath -Path $OutputDir
}
else {
    Resolve-OrCreateDirectory -Path $OutputDir
}

$sourceLabel = Get-DirectoryLabel -DirectoryPath $resolvedSourceDir
$targetDirectories = @(Get-TargetDirectories -ResolvedSourceDir $resolvedSourceDir -UseCurrentOnly:$CurrentOnly)

if ($targetDirectories.Count -eq 0) {
    throw "未找到可生成启动器的目录: $resolvedSourceDir"
}

$nameRegistry = @{}
$generatedFiles = New-Object System.Collections.Generic.List[string]

foreach ($targetDirectory in $targetDirectories) {
    $targetPath = $targetDirectory.FullName
    $targetLabel = Get-DirectoryLabel -DirectoryPath $targetPath
    $baseName = Get-LauncherBaseName -NamePrefix $NamePrefix -SourceLabel $sourceLabel -TargetLabel $targetLabel
    $launcherPath = Get-UniqueLauncherPath -OutputDirectory $resolvedOutputDir -BaseName $baseName -NameRegistry $nameRegistry
    $windowTitle = 'codex {0}' -f $targetLabel
    $launcherContent = New-LauncherContent -TargetDirectory $targetPath -WindowTitle $windowTitle

    if (-not $PrintOnly) {
        Write-LauncherFile -Path $launcherPath -Content $launcherContent -Overwrite:$Force
    }

    [void]$generatedFiles.Add($launcherPath)
}

$generatedFiles.ToArray()
