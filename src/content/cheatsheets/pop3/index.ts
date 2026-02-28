import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'pop3',
  title: 'Pop3',
  description: 'A collection of pop3 resources and tools',
  keywords: ['pop3'],
  category: 'Email Messaging',
  component: () => import('./pop3.vue'),
  icon: FileText,
};

