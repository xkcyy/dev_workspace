# 07_Docs

`07_Docs` 现在是一个面向 GitHub Pages 的纯前端 Markdown Wiki。

## 目录

- `system/`、`topics/`、`notes/`、`references/`、`maps/`：顶层文档栏目
- `assets/`：图片和附件
- `_site/`：前端站点工程，只负责渲染和构建

## 本地开发

```bash
cd _site
npm install
npm run dev
```

## 构建

```bash
cd _site
npm run build
npm run preview
```

## GitHub Pages

- 根仓库通过 `.github/workflows/07-docs-pages.yml` 部署
- 推送到 `main` 后会构建 `07_Docs/_site`
- 项目页 URL 形态为 `https://<owner>.github.io/<repo>/`
- 构建后会运行 Pagefind，为静态页面生成全文检索索引

首次启用时仍需在 GitHub 仓库设置中将 Pages Source 设为 `GitHub Actions`。
