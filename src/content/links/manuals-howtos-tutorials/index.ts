import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'manuals-howtos-tutorials',
  title: 'Manuals Howtos Tutorials',
  description: 'A collection of manuals howtos tutorials resources and tools',
  keywords: ['manuals-howtos-tutorials', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./manuals-howtos-tutorials.vue'),
  icon: Link,
};

