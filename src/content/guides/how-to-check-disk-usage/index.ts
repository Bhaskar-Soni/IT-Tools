import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-check-disk-usage',
  title: 'How To Check Disk Usage',
  description: 'A collection of how to check disk usage resources and tools',
  keywords: ['how-to-check-disk-usage'],
  category: 'How-To Guides',
  component: () => import('./how-to-check-disk-usage.vue'),
  icon: Book,
};

