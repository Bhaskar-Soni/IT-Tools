import { Edit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'vim',
  title: 'Vim Cheatsheet',
  description: 'Vim editor commands, modes, and keyboard shortcuts reference',
  keywords: ['vim', 'editor', 'text', 'shortcuts'],
  category: 'Tools',
  component: () => import('./vim.vue'),
  icon: Edit,
};


