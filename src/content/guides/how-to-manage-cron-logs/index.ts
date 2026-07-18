import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-manage-cron-logs',
  title: 'How To Manage Cron Logs',
  description: 'A collection of how to manage cron logs resources and tools',
  keywords: ['how-to-manage-cron-logs'],
  category: 'How-To Guides',
  component: () => import('./how-to-manage-cron-logs.vue'),
  icon: Book,
};

