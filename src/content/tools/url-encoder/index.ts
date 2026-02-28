import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'url-encoder',
  title: 'Encode/decode url formatted strings',
  description: 'Encode to url-encoded format (also known as "percent-encoded") or decode from it.',
  keywords: ['url','encode','decode','percent','%20','format'],
  component: () => import('./url-encoder.vue'),
  icon: Link,
  category: 'Web',
};
