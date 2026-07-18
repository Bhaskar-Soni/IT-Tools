import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'wordpress',
  title: 'Wordpress',
  description: 'A collection of wordpress resources and tools',
  keywords: ['wordpress'],
  category: 'CMS Platforms',
  component: () => import('./wordpress.vue'),
  icon: FileText,
};

