import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'containers-orchestration',
  title: 'Containers Orchestration',
  description: 'A collection of containers orchestration resources and tools',
  keywords: ['containers-orchestration', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./containers-orchestration.vue'),
  icon: Link,
};

