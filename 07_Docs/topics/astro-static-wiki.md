---
title: Astro Static Wiki
summary: 为什么这个 wiki 选择 Astro 作为纯前端 Markdown 站点骨架。
section: topics
tags:
  - astro
  - wiki
  - frontend
order: 1
updatedAt: 2026-04-07
---

这个 wiki 选 Astro，不是为了做博客，而是为了让 Markdown 内容和页面壳分离，同时保持 `07_Docs` 顶层仍然是文档目录。

## Why Astro

- 纯静态输出，天然适合 GitHub Pages
- 可以从顶层文档目录装载 Markdown，而不是把内容塞进 `src/`
- 可以先用 Markdown，之后再渐进引入 MDX
- 页面、搜索、标签页都能保持纯前端实现

## Current Scope

当前骨架先提供三类基础能力：

- 首页内容聚合
- 标签索引
- Pagefind 全文搜索

更重的 wiki 能力，比如全文索引、反向链接、关系图谱，可以在这套结构上继续加。
