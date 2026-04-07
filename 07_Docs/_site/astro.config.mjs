import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "xkcyy";
const repository = process.env.GITHUB_REPOSITORY ?? "xkcyy/dev_workspace";
const repo = repository.split("/")[1];
const isGitHubPages =
  process.env.PUBLIC_DEPLOY_TARGET === "github-pages" ||
  process.env.GITHUB_ACTIONS === "true";
const isUserSite = repo === `${owner}.github.io`;

export default defineConfig({
  output: "static",
  publicDir: "../assets",
  site: process.env.PUBLIC_SITE_URL ?? `https://${owner}.github.io`,
  base:
    process.env.PUBLIC_BASE_PATH ??
    (isGitHubPages && !isUserSite ? `/${repo}` : "/"),
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }]
    ]
  }
});
