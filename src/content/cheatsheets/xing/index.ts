import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'xing',
  title: 'Xing',
  description: 'A collection of xing resources and tools',
  keywords: ['xing'],
  category: 'Email Messaging',
  component: () => import('./xing.vue'),
  icon: FileText,
};

