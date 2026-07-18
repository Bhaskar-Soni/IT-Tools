import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'smtp',
  title: 'Smtp',
  description: 'A collection of smtp resources and tools',
  keywords: ['smtp'],
  category: 'Email Messaging',
  component: () => import('./smtp.vue'),
  icon: FileText,
};

