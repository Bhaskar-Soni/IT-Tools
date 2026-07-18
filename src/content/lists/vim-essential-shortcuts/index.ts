import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'vim-essential-shortcuts',
  title: 'Vim Essential Shortcuts',
  description: 'A collection of vim essential shortcuts resources and tools',
  keywords: ['vim-essential-shortcuts'],
  category: 'Terminal',
  component: () => import('./vim-essential-shortcuts.vue'),
  icon: FileText,
};

