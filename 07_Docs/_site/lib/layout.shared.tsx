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
      transparentMode: 'none',
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
        on: 'nav',
      },
      {
        text: '文档',
        url: '/wiki/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        text: '系统',
        url: '/wiki/system/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        text: '主题',
        url: '/wiki/topics/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        text: '笔记',
        url: '/wiki/notes/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        text: '参考',
        url: '/wiki/references/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        text: '图谱',
        url: '/wiki/maps/',
        active: 'nested-url',
        on: 'nav',
      },
    ],
  };
}
