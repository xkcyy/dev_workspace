import type { CollectionEntry } from "astro:content";

export type WikiEntry = CollectionEntry<"wiki">;

const SECTION_ORDER = ["system", "topics", "notes", "references", "maps"];
const collator = new Intl.Collator("zh-CN", {
  numeric: true,
  sensitivity: "base"
});

export const SECTION_LABELS: Record<string, string> = {
  system: "System",
  topics: "Topics",
  notes: "Notes",
  references: "References",
  maps: "Maps"
};

export function sortEntries(entries: WikiEntry[]) {
  return [...entries].sort((left, right) => {
    const sectionDiff =
      SECTION_ORDER.indexOf(left.data.section) -
      SECTION_ORDER.indexOf(right.data.section);

    if (sectionDiff !== 0) {
      return sectionDiff;
    }

    const leftOrder = left.data.order ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = right.data.order ?? Number.MAX_SAFE_INTEGER;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return collator.compare(left.data.title, right.data.title);
  });
}

export function groupEntriesBySection(entries: WikiEntry[]) {
  const groups = new Map<string, WikiEntry[]>();

  for (const entry of sortEntries(entries)) {
    const bucket = groups.get(entry.data.section) ?? [];
    bucket.push(entry);
    groups.set(entry.data.section, bucket);
  }

  return [...groups.entries()];
}

export function withBase(pathname = "") {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = pathname.replace(/^\/+/, "");

  if (!normalizedPath) {
    return normalizedBase;
  }

  return `${normalizedBase}${normalizedPath}`;
}

export function toWikiHref(slug: string) {
  return withBase(`wiki/${slug}/`);
}

export function toTagHref(tag: string) {
  return withBase(`tags/${encodeURIComponent(tag)}/`);
}

export function entrySlug(entry: WikiEntry) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}
