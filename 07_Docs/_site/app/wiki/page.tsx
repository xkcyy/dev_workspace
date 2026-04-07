import Link from 'next/link';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';

const quickStart = [
  {
    label: '开始',
    title: '开始页',
    href: '/wiki/system/start-here/',
    copy: '先了解这套 wiki 的目录结构、写作方式与使用规则。',
  },
  {
    label: '发布',
    title: 'GitHub Pages 发布',
    href: '/wiki/system/github-pages-publishing/',
    copy: '查看部署方式、路径约束与对外发布入口。',
  },
  {
    label: '技术栈',
    title: 'Fumadocs 现代化 Wiki',
    href: '/wiki/topics/fumadocs-modern-wiki/',
    copy: '理解当前站点的渲染栈与设计方向。',
  },
];

const categoryCards = [
  {
    label: '系统',
    title: '系统类页面',
    href: '/wiki/system/start-here/',
    copy: '规则、结构、发布与维护方式。',
  },
  {
    label: '主题',
    title: '主题类页面',
    href: '/wiki/topics/fumadocs-modern-wiki/',
    copy: '长期沉淀的稳定知识主题。',
  },
  {
    label: '笔记',
    title: '笔记类页面',
    href: '/wiki/notes/',
    copy: '还未完全抽象，但已经值得保留的内容。',
  },
  {
    label: '参考',
    title: '参考资料',
    href: '/wiki/references/',
    copy: '来源、资料卡片与可反复引用的参考项。',
  },
  {
    label: '图谱',
    title: '索引图谱',
    href: '/wiki/maps/',
    copy: '目录索引、关系图和更高层知识地图。',
  },
];

export default function WikiIndexPage() {
  return (
    <DocsPage full>
      <DocsTitle>文档总览</DocsTitle>
      <DocsDescription>
        从这里进入不同栏目。顶栏负责快速分类，当前页负责展示更完整的入口层。
      </DocsDescription>
      <DocsBody>
        <section className="home-section !pt-0">
          <div className="home-section-head">
            <div>
              <p className="muted-kicker">Quickstart</p>
              <h2 className="home-section-title">先从这三个入口读起。</h2>
            </div>
          </div>

          <div className="wiki-grid">
            {quickStart.map((entry) => (
              <Link key={entry.title} href={entry.href} className="doc-card surface-card-strong">
                <p className="muted-kicker">{entry.label}</p>
                <h2 className="doc-card-title mt-4">{entry.title}</h2>
                <p className="doc-card-copy mt-3">{entry.copy}</p>
                <span className="doc-card-link mt-8">打开页面</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <div>
              <p className="muted-kicker">Categories</p>
              <h2 className="home-section-title">按栏目导航整个文档系统。</h2>
            </div>
          </div>

          <div className="wiki-grid">
            {categoryCards.map((entry) => (
              <Link key={entry.title} href={entry.href} className="doc-card surface-card-strong">
                <p className="muted-kicker">{entry.label}</p>
                <h2 className="doc-card-title mt-4">{entry.title}</h2>
                <p className="doc-card-copy mt-3">{entry.copy}</p>
                <span className="doc-card-link mt-8">进入栏目</span>
              </Link>
            ))}
          </div>
        </section>
      </DocsBody>
    </DocsPage>
  );
}
