import Link from 'next/link';

const quickStart = [
  {
    label: '开始',
    title: '开始页',
    href: '/wiki/system/start-here/',
    description: '先了解目录结构、写作方式和整体工作流。',
  },
  {
    label: '发布',
    title: 'GitHub Pages 发布',
    href: '/wiki/system/github-pages-publishing/',
    description: '查看当前仓库下这套文档站的部署方式和路径约束。',
  },
  {
    label: '技术栈',
    title: 'Fumadocs 现代化 Wiki',
    href: '/wiki/topics/fumadocs-modern-wiki/',
    description: '理解当前站点为什么采用这套渲染栈与设计方向。',
  },
];

const categories = [
  {
    label: '系统',
    title: '规则、结构与发布',
    href: '/wiki/system/start-here/',
    description: '承接站点规则、目录设计和部署约束。',
  },
  {
    label: '主题',
    title: '稳定知识主题',
    href: '/wiki/topics/fumadocs-modern-wiki/',
    description: '承接较稳定、值得长期维护和引用的知识页。',
  },
  {
    label: '笔记',
    title: '渐进沉淀内容',
    href: '/wiki/notes/',
    description: '先形成页面，再决定是否升级为主题知识。',
  },
  {
    label: '参考',
    title: '参考资料',
    href: '/wiki/references/',
    description: '聚合来源、资料卡片和长期可检索的参考项。',
  },
  {
    label: '图谱',
    title: '索引图谱',
    href: '/wiki/maps/',
    description: '用于组织知识目录、关系图和更高层导航。',
  },
];

const headerLinks = [
  { text: '文档', href: '/wiki/' },
  { text: '开始', href: '/wiki/system/start-here/' },
  { text: '主题', href: '/wiki/topics/fumadocs-modern-wiki/' },
  { text: '笔记', href: '/wiki/notes/' },
  { text: '参考', href: '/wiki/references/' },
  { text: '图谱', href: '/wiki/maps/' },
];

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 py-6 md:px-10">
        <header className="home-header">
          <Link href="/" className="home-brand">
            <span className="size-2.5 rounded-sm bg-slate-950" />
            知识花园
          </Link>

          <nav className="home-topnav" aria-label="Primary">
            {headerLinks.map((item) => (
              <Link key={item.text} href={item.href} className="home-topnav-link">
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="home-actions">
            <Link href="/wiki/" className="secondary-button !min-h-[2.55rem] !px-4">
              浏览文档
            </Link>
            <Link href="/wiki/system/start-here/" className="primary-button !min-h-[2.55rem] !px-4">
              从开始页进入
            </Link>
          </div>
        </header>

        <section className="home-hero">
          <div className="relative z-10">
            <div className="hero-eyebrow">简体中文主站 · 浅色产品文档风格</div>
            <h1 className="hero-title mt-6">
              把个人 wiki 做成一套更接近现代产品文档的中文知识系统。
            </h1>
            <p className="hero-lede mt-7">
              这次的重点不是继续堆视觉效果，而是让首页、顶栏与目录关系更接近
              Vercel Docs 的逻辑：顶栏先分类，首页先导航，正文保持克制和可读。
            </p>

            <div className="home-badges">
              <span>GitHub Pages</span>
              <span>Fumadocs</span>
              <span>静态导出</span>
              <span>全文搜索</span>
              <span>简体中文优先</span>
            </div>
          </div>

          <div className="surface-card-strong home-quickstart">
            <div className="home-section-head">
              <div>
                <p className="muted-kicker">Quickstart</p>
                <h2 className="home-panel-title">先从三个关键入口开始。</h2>
              </div>
            </div>

            <div className="home-link-list">
              {quickStart.map((item) => (
                <Link key={item.title} href={item.href} className="home-link-item">
                  <div>
                    <p className="muted-kicker">{item.label}</p>
                    <h3 className="doc-card-title mt-3">{item.title}</h3>
                    <p className="doc-card-copy mt-2">{item.description}</p>
                  </div>
                  <span className="doc-card-link">打开</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <div>
              <p className="muted-kicker">Categories</p>
              <h2 className="home-section-title">按栏目浏览文档，而不是只从一条目录树往下点。</h2>
            </div>
          </div>

          <div className="wiki-grid">
            {categories.map((section) => (
              <Link key={section.title} href={section.href} className="doc-card surface-card-strong">
                <p className="muted-kicker">{section.label}</p>
                <h3 className="doc-card-title mt-4">{section.title}</h3>
                <p className="doc-card-copy mt-3">{section.description}</p>
                <span className="doc-card-link mt-8">进入栏目</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
