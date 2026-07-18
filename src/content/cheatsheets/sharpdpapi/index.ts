import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sharpdpapi',
  title: 'Sharpdpapi',
  description: 'A collection of sharpdpapi resources and tools',
  keywords: ['sharpdpapi'],
  category: 'Windows AD Attacks',
  component: () => import('./sharpdpapi.vue'),
  icon: FileText,
};

