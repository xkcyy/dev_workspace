import { createMDX } from 'fumadocs-mdx/next';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'xkcyy';
const repository = process.env.GITHUB_REPOSITORY ?? 'xkcyy/dev_workspace';
const repo = repository.split('/')[1];
const isGitHubPages =
  process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github-pages' ||
  process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo === `${owner}.github.io`;
const basePath = isGitHubPages && !isUserSite ? `/${repo}` : '';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
};

export default withMDX(config);
