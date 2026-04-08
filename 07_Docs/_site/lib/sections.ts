import type { Folder, Root } from 'fumadocs-core/page-tree';
import { source } from './source';

export type SectionItem = {
  id: string;
  title: string;
  href: string;
  description?: string;
};

function isFolder(node: Root['children'][number]): node is Folder {
  return node.type === 'folder';
}

export function getSectionFolders() {
  return source.getPageTree().children.filter(isFolder);
}

export function getSectionItems(): SectionItem[] {
  return getSectionFolders().map((folder) => {
    const id = folder.$id ?? '';
    const href =
      folder.index?.url ??
      (typeof folder.children[0] === 'object' && 'url' in folder.children[0]
        ? folder.children[0].url
        : `/wiki/${id}`);

    return {
      id,
      title: String(folder.name),
      href,
      description: folder.description ? String(folder.description) : undefined,
    };
  });
}

export function getSectionFolder(section: string) {
  return getSectionFolders().find((folder) => folder.$id === section);
}

export function getSectionTree(section: string): Root | undefined {
  const folder = getSectionFolder(section);
  if (!folder) {
    return undefined;
  }

  return {
    name: folder.name,
    children: folder.index ? [folder.index, ...folder.children] : [...folder.children],
  };
}
