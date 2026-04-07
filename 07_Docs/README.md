# 07_Docs

`07_Docs` 现在是一个面向 GitHub Pages 的现代化简体中文 Markdown Wiki。

## 目录

- `system/`、`topics/`、`notes/`、`references/`、`maps/`：顶层文档栏目
- `assets/`：图片和附件
- `_site/`：Fumadocs + Next.js 站点工程，只负责渲染、搜索和构建

## 本地开发

```bash
cd _site
npm install
npm run dev
```

开发模式启动前会先把顶层文档目录同步到 `_site/content/docs/`，Fumadocs 只消费这份站内副本。

## 构建

```bash
cd _site
npm run build
```

## GitHub Pages

- 根仓库通过 `.github/workflows/07-docs-pages.yml` 部署
- 推送到 `main` 后会构建 `07_Docs/_site`
- 项目页 URL 形态为 `https://<owner>.github.io/<repo>/`
- `_site` 会导出为静态站点并发布到 Pages
- 全文搜索由 Fumadocs 的静态搜索方案提供

首次启用时仍需在 GitHub 仓库设置中将 Pages Source 设为 `GitHub Actions`。
