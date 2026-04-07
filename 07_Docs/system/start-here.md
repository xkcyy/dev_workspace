---
title: Start Here
summary: 说明这个 wiki 的内容入口、组织方式和写作约定。
section: system
tags:
  - wiki
  - system
order: 1
updatedAt: 2026-04-07
---

这个目录现在不再使用 `raw/` 和 `wiki/` 的双层占位结构，也不把顶层做成前端代码目录。

现在的规则是：

- 顶层直接放文档栏目
- `_site/` 只负责渲染这些内容
- `assets/` 统一存放附件和图片

## Authoring

- 新页面直接创建在顶层文档栏目中
- 页面必须带 frontmatter
- 页面之间优先使用相对链接

## Suggested Flow

1. 在 `system/`、`topics/`、`notes/`、`references/`、`maps/` 下写 Markdown 页面。
2. 图片和附件放到 `assets/`。
3. 进入 `_site/` 后运行 `npm run dev` 预览。
4. 推送到 GitHub 后由 Pages 自动发布。

继续阅读：[GitHub Pages Publishing](./github-pages-publishing) 与 [Astro Static Wiki](../topics/astro-static-wiki)。
