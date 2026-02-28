import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'cors',
  title: 'Cors',
  description: 'A collection of cors resources and tools',
  keywords: ['cors'],
  category: 'WebApp Injections',
  component: () => import('./cors.vue'),
  icon: FileText,
};

