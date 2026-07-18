import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'systems-services',
  title: 'Systems Services',
  description: 'A collection of systems services resources and tools',
  keywords: ['systems-services', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./systems-services.vue'),
  icon: Link,
};

