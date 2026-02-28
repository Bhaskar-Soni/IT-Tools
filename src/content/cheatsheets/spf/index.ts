import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'spf',
  title: 'Spf',
  description: 'A collection of spf resources and tools',
  keywords: ['spf'],
  category: 'Email Messaging',
  component: () => import('./spf.vue'),
  icon: FileText,
};

