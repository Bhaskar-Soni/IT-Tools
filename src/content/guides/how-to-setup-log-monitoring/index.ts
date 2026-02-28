import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-setup-log-monitoring',
  title: 'How To Setup Log Monitoring',
  description: 'A collection of how to setup log monitoring resources and tools',
  keywords: ['how-to-setup-log-monitoring'],
  category: 'How-To Guides',
  component: () => import('./how-to-setup-log-monitoring.vue'),
  icon: Book,
};

