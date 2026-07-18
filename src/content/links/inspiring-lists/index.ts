import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'inspiring-lists',
  title: 'Inspiring Lists',
  description: 'A collection of inspiring lists resources and tools',
  keywords: ['inspiring-lists', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./inspiring-lists.vue'),
  icon: Link,
};

