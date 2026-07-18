import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'ad-cs-basics',
  title: 'Ad Cs Basics',
  description: 'A collection of ad cs basics resources and tools',
  keywords: ['ad-cs-basics'],
  category: 'Identity & AD',
  component: () => import('./ad-cs-basics.vue'),
  icon: FileText,
};

