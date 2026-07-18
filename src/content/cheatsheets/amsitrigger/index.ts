import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'amsitrigger',
  title: 'Amsitrigger',
  description: 'A collection of amsitrigger resources and tools',
  keywords: ['amsitrigger'],
  category: 'Windows Defense',
  component: () => import('./amsitrigger.vue'),
  icon: FileText,
};

