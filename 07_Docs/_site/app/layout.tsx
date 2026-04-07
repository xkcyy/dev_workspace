import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

export const metadata = {
  title: {
    default: '知识花园',
    template: '%s | 知识花园',
  },
  description: '一个面向简体中文的现代化个人 wiki，强调可读性、结构感和长期沉淀。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: false,
          }}
          i18n={{
            locale: 'cn',
            translations: {
              search: '搜索文档',
              searchNoResult: '没有命中结果',
              toc: '本页目录',
              tocNoHeadings: '本页暂无小节标题',
              lastUpdate: '最后更新',
              chooseLanguage: '切换语言',
              nextPage: '下一页',
              previousPage: '上一页',
              chooseTheme: '切换主题',
              editOnGithub: '在 GitHub 上编辑',
            },
          }}
          search={{
            options: {
              type: 'static',
              api: '/api/search',
              links: [
                ['开始页', '/wiki/system/start-here'],
                ['发布说明', '/wiki/system/github-pages-publishing'],
                ['技术栈说明', '/wiki/topics/fumadocs-modern-wiki'],
              ],
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
