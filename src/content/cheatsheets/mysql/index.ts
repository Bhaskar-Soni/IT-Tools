import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mysql',
  title: 'Mysql',
  description: 'A collection of mysql resources and tools',
  keywords: ['mysql'],
  category: 'Programming Data',
  component: () => import('./mysql.vue'),
  icon: FileText,
};

