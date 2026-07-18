import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'directoryservices',
  title: 'Directoryservices',
  description: 'A collection of directoryservices resources and tools',
  keywords: ['directoryservices'],
  category: 'Identity & AD',
  component: () => import('./directoryservices.vue'),
  icon: FileText,
};

