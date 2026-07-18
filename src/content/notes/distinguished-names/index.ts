import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'distinguished-names',
  title: 'Distinguished Names',
  description: 'A collection of distinguished names resources and tools',
  keywords: ['distinguished-names'],
  category: 'Identity & AD',
  component: () => import('./distinguished-names.vue'),
  icon: FileText,
};

