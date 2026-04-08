import { notFound } from 'next/navigation';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { getSectionTree } from '@/lib/sections';

type SectionLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    section: string;
  }>;
};

export default async function SectionLayout({ children, params }: SectionLayoutProps) {
  const { section } = await params;
  const tree = getSectionTree(section);

  if (!tree) {
    notFound();
  }

  return (
    <DocsLayout tree={tree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
