import Link from 'next/link';

const sections = [
  {
    label: '系统',
    title: '规则、结构与发布',
    href: '/wiki/system/start-here',
    description: '用于约束这套 wiki 的目录结构、写作方式与长期维护边界。',
  },
  {
    label: '主题',
    title: '稳定知识主题',
    href: '/wiki/topics/fumadocs-modern-wiki',
    description: '沉淀值得反复引用的主题页、方法论和框架判断。',
  },
  {
    label: '笔记',
    title: '渐进沉淀内容',
    href: '/wiki/system/start-here',
    description: '先记录，再抽象；先形成页面，再决定是否升级为主题知识。',
  },
];

const metrics = [
  {
    title: '信息架构',
    copy: '顶层目录直接表达知识结构，不让内容被埋进工程文件树。',
  },
  {
    title: '中文阅读',
    copy: '字体、行距、边界和留白都按简体中文长文阅读来收敛。',
  },
  {
    title: '静态交付',
    copy: '继续保留 GitHub Pages 的低维护部署路径，不引入服务端负担。',
  },
];

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="mx-auto flex min-h-screen max-w-[1380px] flex-col px-6 py-7 md:px-10">
        <header className="flex items-center justify-between py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-slate-950">
            <span className="size-2.5 rounded-sm bg-slate-950" />
            知识花园
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/wiki" className="secondary-button !min-h-[2.6rem] !px-4">
              浏览文档
            </Link>
            <Link href="/wiki/system/start-here" className="primary-button !min-h-[2.6rem] !px-4">
              从开始页进入
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-12 py-10 md:grid-cols-[1.2fr_0.9fr] md:py-16">
          <div className="relative z-10">
            <div className="hero-eyebrow">简体中文主站 · 浅色产品文档风格</div>
            <h1 className="hero-title mt-6">把个人 wiki 做成一套干净、现代、可长期维护的文档系统。</h1>
            <p className="hero-lede mt-7">
              这个站点现在不再依赖深色光效去营造“现代感”，而是回到更接近 Vercel
              Docs 的浅色产品文档逻辑：边界清楚、排版克制、内容优先、导航稳定。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/wiki" className="primary-button">
                打开文档主区
              </Link>
              <Link href="/wiki/topics/fumadocs-modern-wiki" className="secondary-button">
                查看技术栈说明
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>GitHub Pages</span>
              <span>Fumadocs</span>
              <span>全文搜索</span>
              <span>简体中文优先</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="surface-card-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="muted-kicker">Visual Direction</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    更像现代产品文档，而不是模板站点。
                  </h2>
                </div>
              </div>

              <div className="metric-grid mt-6">
                {metrics.map((item) => (
                  <div key={item.title} className="metric-card surface-card rounded-[1.4rem]">
                    <p className="muted-kicker">{item.title}</p>
                    <p className="mt-3 text-[1rem] text-slate-600">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 pb-16">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="muted-kicker">Sections</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950">
                结构继续保持文档优先，视觉则向现代开发者产品文档靠拢。
              </h2>
            </div>
          </div>

          <div className="wiki-grid">
            {sections.map((section) => (
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
