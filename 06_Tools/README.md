# 06_Tools

存放开发辅助工具和环境配置。

## 子目录

- `scripts/`：常用脚本
- `dotfiles/`：环境配置
- `automation/`：自动化任务

## codex-wt

`scripts/codex-wt.ps1` 用于按目录批量生成桌面启动脚本。

常用示例：

- 在当前目录下，按一级子目录生成一批桌面启动脚本：`codex-wt`
- 只为当前目录自己生成一个启动脚本：`codex-wt -CurrentOnly`
- 生成到指定目录而不是桌面：`codex-wt -OutputDir .\.codex-launchers`
- 只预览将生成哪些脚本，不实际写入：`codex-wt -PrintOnly`

生成出的每个 `.cmd` 脚本都可以直接双击，效果是：

- 打开一个新的 Windows Terminal 窗口
- 切换到对应目录
- 自动运行 `codex`

如果希望直接在任意目录调用，建议把 `D:\01_DevWorkspace\06_Tools\scripts` 加入 `PATH`，然后使用 `codex-wt.cmd` 作为入口。
