import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'xss',
  title: 'Xss',
  description: 'A collection of xss resources and tools',
  keywords: ['xss'],
  category: 'WebApp Injections',
  component: () => import('./xss.vue'),
  icon: FileText,
};

