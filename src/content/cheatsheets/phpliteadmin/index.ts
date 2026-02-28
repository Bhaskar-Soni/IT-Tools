import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'phpliteadmin',
  title: 'Phpliteadmin',
  description: 'A collection of phpliteadmin resources and tools',
  keywords: ['phpliteadmin'],
  category: 'WebApp Injections',
  component: () => import('./phpliteadmin.vue'),
  icon: FileText,
};

