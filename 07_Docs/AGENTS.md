# AGENTS.md

本文件定义 `D:\01_DevWorkspace\07_Docs` 这一层的规则。

## 作用范围

- 适用于 `07_Docs` 及其未被更深层 `AGENTS.md` 覆盖的子目录。

## 当前层定位

- 这里是一个面向 GitHub Pages 的静态前端 Markdown Wiki。
- 内容层和渲染层分离，顶层目录优先表达文档分类。
- 站点实现基于 Astro，但前端工程放在 `_site/`，不是顶层主结构。

## 当前子目录

- `system/`、`topics/`、`notes/`、`references/`、`maps/`：wiki 页面内容
- `assets/`：附件和静态资源
- `_site/`：站点路由、布局、样式、构建配置

## 关键文件

- `.wiki-schema.md`：frontmatter 和内容约定
- `_site/package.json`：前端依赖与脚本
- `_site/astro.config.mjs`：构建与 Pages 基础路径配置
- `_site/src/content.config.ts`：Astro content schema

## 简单规则

- 所有长期页面都放在顶层文档栏目目录中。
- 页面使用 Markdown 或 MDX，且必须符合 `.wiki-schema.md`。
- 内容文件只负责知识表达，不掺杂 `_site/` 里的实现细节。
- 图片、附件和可直接引用的静态文件放入 `assets/`。
- 页面内链接优先使用相对链接，避免 GitHub Pages 子路径下失效。
