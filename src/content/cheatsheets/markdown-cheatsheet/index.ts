import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'markdown-cheatsheet',
  title: 'Markdown Cheatsheet',
  description: 'Markdown syntax and formatting reference',
  keywords: ['markdown', 'syntax', 'formatting', 'reference'],
  category: 'Development',
  component: () => import('./markdown-cheatsheet.vue'),
  icon: FileText,
};


