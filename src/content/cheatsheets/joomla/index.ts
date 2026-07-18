import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'joomla',
  title: 'Joomla',
  description: 'A collection of joomla resources and tools',
  keywords: ['joomla'],
  category: 'CMS Platforms',
  component: () => import('./joomla.vue'),
  icon: FileText,
};

