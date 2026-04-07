import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-slate-950">
          <span className="size-2.5 rounded-sm bg-slate-950" />
          {appName}
        </span>
      ),
      url: '/',
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    themeSwitch: {
      enabled: false,
    },
    links: [
      {
        text: '首页',
        url: '/',
        active: 'url',
      },
      {
        text: '文档',
        url: '/wiki/',
        active: 'nested-url',
      },
    ],
  };
}
