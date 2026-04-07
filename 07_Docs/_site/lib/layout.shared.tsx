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
        text: '开始',
        url: '/wiki/system/start-here/',
        active: 'nested-url',
        on: 'nav',
      },
      {
        type: 'menu',
        text: '栏目',
        on: 'nav',
        items: [
          {
            text: '系统',
            description: '站点规则、结构和发布方式',
            url: '/wiki/system/start-here/',
          },
          {
            text: '主题',
            description: '稳定知识主题与方法论',
            url: '/wiki/topics/fumadocs-modern-wiki/',
          },
          {
            text: '笔记',
            description: '尚未完全抽象但值得沉淀的内容',
            url: '/wiki/notes/',
          },
          {
            text: '参考',
            description: '来源、引用与参考资料卡片',
            url: '/wiki/references/',
          },
          {
            text: '图谱',
            description: '更高层的索引与知识地图',
            url: '/wiki/maps/',
          },
        ],
      },
      {
        type: 'menu',
        text: '快速开始',
        on: 'nav',
        items: [
          {
            text: '开始页',
            description: '先理解目录、写作方式和工作流',
            url: '/wiki/system/start-here/',
          },
          {
            text: '发布',
            description: '查看 GitHub Pages 的部署方式',
            url: '/wiki/system/github-pages-publishing/',
          },
          {
            text: '技术栈',
            description: '了解当前站点实现与视觉方向',
            url: '/wiki/topics/fumadocs-modern-wiki/',
          },
        ],
      },
    ],
  };
}
