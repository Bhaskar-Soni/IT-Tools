import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-to-binary',
  title: 'Text to UTF-8 binary',
  description: 'Convert text to its UTF-8 binary representation and vice-versa.',
  keywords: ['text','to','binary','converter','encode','decode','ascii'],
  component: () => import('./text-to-binary.vue'),
  icon: Binary,
  category: 'Converters',
};
