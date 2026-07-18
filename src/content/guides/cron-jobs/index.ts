import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'cron-jobs',
  title: 'Cron Jobs',
  description: 'A collection of cron jobs resources and tools',
  keywords: ['cron-jobs'],
  category: 'Configurations',
  component: () => import('./cron-jobs.vue'),
  icon: Book,
};

