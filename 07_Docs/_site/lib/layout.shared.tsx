import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="text-sm font-semibold tracking-[0.2em] uppercase">
          {appName}
        </span>
      ),
      url: '/',
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: '首页',
        url: '/',
        active: 'url',
      },
      {
        text: 'Wiki',
        url: '/wiki/',
        active: 'nested-url',
      },
    ],
  };
}
