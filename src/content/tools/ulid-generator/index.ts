import { SortDescendingNumbers } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ulid-generator',
  title: 'ULID generator',
  description: 'Generate random Universally Unique Lexicographically Sortable Identifier (ULID).',
  keywords: ['ulid','generator','random','id','alphanumeric','identity','token','string','identifier','unique'],
  component: () => import('./ulid-generator.vue'),
  icon: SortDescendingNumbers,
  category: 'Converters',
};
