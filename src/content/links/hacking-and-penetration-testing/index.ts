import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'hacking-and-penetration-testing',
  title: 'Hacking And Penetration Testing',
  description: 'A collection of hacking and penetration testing resources and tools',
  keywords: ['hacking-and-penetration-testing', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./hacking-and-penetration-testing.vue'),
  icon: Link,
};

