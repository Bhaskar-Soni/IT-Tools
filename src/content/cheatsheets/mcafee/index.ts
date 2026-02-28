import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mcafee',
  title: 'Mcafee',
  description: 'A collection of mcafee resources and tools',
  keywords: ['mcafee'],
  category: 'Windows Defense',
  component: () => import('./mcafee.vue'),
  icon: FileText,
};

