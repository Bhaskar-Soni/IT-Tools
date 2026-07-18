import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'slugify-string',
  title: 'Slugify string',
  description: 'Make a string url, filename and id safe.',
  keywords: ['slugify','string','escape','emoji','special','character','space','trim'],
  component: () => import('./slugify-string.vue'),
  icon: Link,
  category: 'Web',
};
