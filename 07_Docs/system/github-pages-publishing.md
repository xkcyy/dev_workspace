---
title: GitHub Pages 发布
description: 当前仓库下该 wiki 的发布方式和需要注意的 GitHub Pages 约束。
---

这个 wiki 通过根仓库的 GitHub Actions 工作流发布。

## URL 形态

当前远端仓库是 `xkcyy/dev_workspace`，因此站点 URL 形态是：

```text
https://xkcyy.github.io/dev_workspace/
```

这也是为什么 `_site` 中的 Next.js 构建配置必须显式处理 `basePath=/dev_workspace`。

## 首次启用

1. 在 GitHub 仓库设置中打开 `Pages`
2. 将 Source 设置为 `GitHub Actions`
3. 推送到 `main`

## 构建范围

工作流只构建 `07_Docs/_site/`，不会把整个工作区都当成前端站点。
