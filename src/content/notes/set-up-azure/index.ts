import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'set-up-azure',
  title: 'Set Up Azure',
  description: 'A collection of set up azure resources and tools',
  keywords: ['set-up-azure'],
  category: 'Cloud',
  component: () => import('./set-up-azure.vue'),
  icon: FileText,
};

