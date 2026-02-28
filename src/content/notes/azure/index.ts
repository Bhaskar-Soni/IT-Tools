import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'azure',
  title: 'Azure',
  description: 'A collection of azure resources and tools',
  keywords: ['azure'],
  category: 'Cloud',
  component: () => import('./azure.vue'),
  icon: FileText,
};

