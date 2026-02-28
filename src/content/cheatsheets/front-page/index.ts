import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'front-page',
  title: 'Front Page',
  description: 'A collection of front page resources and tools',
  keywords: ['front-page'],
  category: 'CMS Platforms',
  component: () => import('./front-page.vue'),
  icon: FileText,
};

