import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'coldfusion',
  title: 'Coldfusion',
  description: 'A collection of coldfusion resources and tools',
  keywords: ['coldfusion'],
  category: 'CMS Platforms',
  component: () => import('./coldfusion.vue'),
  icon: FileText,
};

