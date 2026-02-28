import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'web-tools',
  title: 'Web Tools',
  description: 'A collection of web tools resources and tools',
  keywords: ['web-tools', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./web-tools.vue'),
  icon: Link,
};

