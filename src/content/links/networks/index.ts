import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'networks',
  title: 'Networks',
  description: 'A collection of networks resources and tools',
  keywords: ['networks', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./networks.vue'),
  icon: Link,
};

