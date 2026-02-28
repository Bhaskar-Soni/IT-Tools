import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-monitor-server-resources',
  title: 'How To Monitor Server Resources',
  description: 'A collection of how to monitor server resources resources and tools',
  keywords: ['how-to-monitor-server-resources'],
  category: 'How-To Guides',
  component: () => import('./how-to-monitor-server-resources.vue'),
  icon: Book,
};

