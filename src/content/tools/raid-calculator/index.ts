import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'raid-calculator',
  title: 'RAID Calculator',
  description: 'Calculate storage capacity, fault tolerance and space efficiency of an array based on the number of disks, size, and RAID type',
  keywords: ['raid','calculator'],
  component: () => import('./raid-calculator.vue'),
  icon: Database,
  category: 'Network',
};
