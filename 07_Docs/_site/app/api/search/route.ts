import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

export const revalidate = false;
export const dynamic = 'force-static';

const search = createFromSource(source, {
  localeMap: {
    cn: {
      components: {
        tokenizer: await createTokenizer(),
      },
    },
  },
});

export const GET = search.staticGET;
