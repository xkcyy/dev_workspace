import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getSectionFolder } from '@/lib/sections';

type SectionDocPageProps = {
  params: Promise<{
    section: string;
    slug: string[];
  }>;
};

export default async function SectionDocPage({ params }: SectionDocPageProps) {
  const { section, slug } = await params;
  const page = source.getPage([section, ...slug]);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getSectionFolderParams();
}

export async function generateMetadata({ params }: SectionDocPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const page = source.getPage([section, ...slug]);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

function getSectionFolderParams() {
  return source
    .getPages()
    .filter((page) => page.slugs.length > 1)
    .map((page) => ({
      section: page.slugs[0],
      slug: page.slugs.slice(1),
    }));
}
