import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'persist-mac-osx',
  title: 'Persist Mac Osx',
  description: 'A collection of persist mac osx resources and tools',
  keywords: ['persist-mac-osx'],
  category: 'OS System',
  component: () => import('./persist-mac-osx.vue'),
  icon: FileText,
};

