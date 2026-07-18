import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'psamsi',
  title: 'Psamsi',
  description: 'A collection of psamsi resources and tools',
  keywords: ['psamsi'],
  category: 'Windows Defense',
  component: () => import('./psamsi.vue'),
  icon: FileText,
};

