import Link from 'next/link';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';

export default function WikiIndexPage() {
  return (
    <DocsPage full>
      <DocsTitle>Wiki 导航</DocsTitle>
      <DocsDescription>
        这里是文档主区入口。你可以从系统说明开始，或直接进入主题页。
      </DocsDescription>
      <DocsBody>
        <div className="wiki-grid">
          <Link
            href="/wiki/system/start-here"
            className="wiki-card rounded-3xl border border-white/10 bg-white/4 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/42">System</p>
            <h2 className="mt-4 text-xl font-semibold text-white">开始页</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              了解这套 wiki 的目录结构、写作规则和使用方式。
            </p>
          </Link>
          <Link
            href="/wiki/topics/fumadocs-modern-wiki"
            className="wiki-card rounded-3xl border border-white/10 bg-white/4 p-6 transition hover:-translate-y-1 hover:border-violet-300/30"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/42">Topic</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Fumadocs 现代化 Wiki</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              说明当前为什么选择 Fumadocs，以及它如何承载现代化中文文档站。
            </p>
          </Link>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
