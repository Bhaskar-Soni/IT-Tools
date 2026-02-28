import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'edrcheck',
  title: 'Edrcheck',
  description: 'A collection of edrcheck resources and tools',
  keywords: ['edrcheck'],
  category: 'Windows Defense',
  component: () => import('./edrcheck.vue'),
  icon: FileText,
};

