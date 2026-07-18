import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-lorem-ipsum',
  title: 'Markdown Lorem Ipsum',
  description: 'Generate Lorem Ipsum in markdown',
  keywords: ['markdown','lorem','ipsum'],
  component: () => import('./markdown-lorem-ipsum.vue'),
  icon: AlignJustified,
  category: 'Markdown',
};
