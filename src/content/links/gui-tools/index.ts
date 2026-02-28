import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'gui-tools',
  title: 'Gui Tools',
  description: 'A collection of gui tools resources and tools',
  keywords: ['gui-tools', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./gui-tools.vue'),
  icon: Link,
};

