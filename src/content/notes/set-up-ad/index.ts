import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'set-up-ad',
  title: 'Set Up Ad',
  description: 'A collection of set up ad resources and tools',
  keywords: ['set-up-ad'],
  category: 'Identity & AD',
  component: () => import('./set-up-ad.vue'),
  icon: FileText,
};

