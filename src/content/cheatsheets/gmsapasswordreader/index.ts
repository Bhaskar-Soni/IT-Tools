import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'gmsapasswordreader',
  title: 'Gmsapasswordreader',
  description: 'A collection of gmsapasswordreader resources and tools',
  keywords: ['gmsapasswordreader'],
  category: 'Windows AD Attacks',
  component: () => import('./gmsapasswordreader.vue'),
  icon: FileText,
};

