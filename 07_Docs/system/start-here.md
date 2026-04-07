---
title: 开始页
description: 说明这个 wiki 的内容入口、组织方式、写作约定以及当前站点的工作方式。
---

这个目录现在不再使用 `raw/` 和 `wiki/` 的双层占位结构，也不把顶层做成前端代码目录。

现在的规则是：

- 顶层直接放文档栏目
- `_site/` 只负责渲染这些内容
- `assets/` 统一存放附件和图片

## 写作方式

- 新页面直接创建在顶层文档栏目中
- 页面必须带 frontmatter
- 页面之间优先使用相对链接

## 使用流程

1. 在 `system/`、`topics/`、`notes/`、`references/`、`maps/` 下写 Markdown 页面。
2. 图片和附件放到 `assets/`。
3. 进入 `_site/` 后运行 `npm run dev` 预览。
4. 推送到 GitHub 后由 Pages 自动发布。

继续阅读：[GitHub Pages Publishing](./github-pages-publishing) 与 [Fumadocs Modern Wiki](../topics/fumadocs-modern-wiki)。
