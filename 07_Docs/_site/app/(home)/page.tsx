import Link from 'next/link';

const sections = [
  {
    title: '系统',
    href: '/wiki/system/start-here',
    description: '记录站点规则、写作约定、发布方式和长期维护约束。',
  },
  {
    title: '主题',
    href: '/wiki/topics/fumadocs-modern-wiki',
    description: '沉淀较稳定的知识主题、框架选择和方法论。',
  },
  {
    title: '笔记',
    href: '/wiki/system/start-here',
    description: '适合放暂时未完全抽象、但已值得长期保留的内容。',
  },
];

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-white/88 uppercase">
            知识花园
          </Link>
          <nav className="flex items-center gap-3 text-sm text-white/70">
            <Link href="/wiki/system/start-here" className="rounded-full border border-white/12 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white">
              进入 Wiki
            </Link>
            <Link href="/wiki/topics/fumadocs-modern-wiki" className="rounded-full border border-white/12 px-4 py-2 transition hover:border-violet-300/40 hover:text-white">
              查看主题
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 md:grid-cols-[1.3fr_0.9fr] md:py-16">
          <div className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium text-cyan-100">
              简体中文主站 · Fumadocs · GitHub Pages
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              让 wiki 看起来像一套真正的现代产品文档。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              顶层目录继续保持文档优先，站点渲染层收敛到 <code className="rounded bg-white/10 px-2 py-1 text-base">_site/</code>。
              视觉上采用更现代的 docs 体系，保留静态部署与全文检索能力。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/wiki/system/start-here"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                从开始页进入
              </Link>
              <Link
                href="/wiki/topics/fumadocs-modern-wiki"
                className="rounded-full border border-white/14 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/8"
              >
                查看技术栈说明
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="glass-card rounded-[2rem] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-white/55">
                <span>体验目标</span>
                <span>现代文档界面</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">导航</p>
                  <p className="mt-2 text-lg font-medium text-white">层级清晰、搜索前置、阅读界面克制</p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-violet-200/80">排版</p>
                  <p className="mt-2 text-lg font-medium text-white">中文阅读优先，留白和节奏比装饰更重要</p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-200/80">发布</p>
                  <p className="mt-2 text-lg font-medium text-white">继续保留 GitHub Pages 静态部署能力</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 pb-18">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/42">栏目</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">文档目录仍然在顶层，而不是被埋进代码结构。</h2>
            </div>
          </div>

          <div className="wiki-grid">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="wiki-card glass-card rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-white/16"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">{section.title}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{section.description}</p>
                <span className="mt-8 inline-flex text-sm font-medium text-cyan-200">打开页面</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
