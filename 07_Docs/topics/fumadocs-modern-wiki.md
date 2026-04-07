---
title: Fumadocs 现代化 Wiki
description: 为什么这套 wiki 选择 Fumadocs，以及它如何满足现代审美、简体中文和 GitHub Pages 的要求。
---

这个 wiki 现在选择 Fumadocs，不是单纯因为它是另一个框架，而是因为它更接近现代产品文档的完成度。

## 为什么是 Fumadocs

- 默认 docs layout 更成熟，导航、目录和排版比手写 Astro 壳更像产品级文档
- 基于 Next.js，可以更容易接入更丰富的现代 UI 体系
- 对 MDX 文档组织友好，适合持续沉淀 wiki
- 支持静态导出，仍可部署到 GitHub Pages

## 当前定位

当前目录保持“文档在顶层、渲染在 `_site/`”的结构：

- 顶层目录承载知识内容
- `_site/` 只负责渲染、搜索与部署
- 发布继续走 GitHub Pages

## 设计目标

视觉目标不是“能看”，而是更接近现代产品文档：

- 更克制的层级和留白
- 更强的导航和搜索入口
- 更适合简体中文阅读
- 首页与文档页之间的气质统一
