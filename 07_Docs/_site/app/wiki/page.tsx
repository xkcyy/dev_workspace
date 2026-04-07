import Link from 'next/link';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';

const entries = [
  {
    label: '系统',
    title: '开始页',
    href: '/wiki/system/start-here',
    copy: '先理解这套 wiki 的结构、写作规则与发布方式，再开始补充内容。',
  },
  {
    label: '主题',
    title: 'Fumadocs 现代化 Wiki',
    href: '/wiki/topics/fumadocs-modern-wiki',
    copy: '查看当前站点为什么采用这套渲染栈，以及它的视觉与工程边界。',
  },
  {
    label: '发布',
    title: 'GitHub Pages 发布',
    href: '/wiki/system/github-pages-publishing',
    copy: '了解这套站点在仓库中的部署方式、路径约束与发布出口。',
  },
];

export default function WikiIndexPage() {
  return (
    <DocsPage full>
      <DocsTitle>文档入口</DocsTitle>
      <DocsDescription>
        从这里进入各个主栏目。整体阅读体验会保持浅色、克制和信息优先，而不是依赖装饰效果。
      </DocsDescription>
      <DocsBody>
        <div className="wiki-grid">
          {entries.map((entry) => (
            <Link key={entry.title} href={entry.href} className="doc-card surface-card-strong">
              <p className="muted-kicker">{entry.label}</p>
              <h2 className="doc-card-title mt-4">{entry.title}</h2>
              <p className="doc-card-copy mt-3">{entry.copy}</p>
              <span className="doc-card-link mt-8">打开页面</span>
            </Link>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}
