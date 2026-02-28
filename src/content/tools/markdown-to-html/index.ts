import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-to-html',
  title: 'Markdown to HTML',
  description: 'Convert Markdown to HTML and allow to print (as PDF)',
  keywords: ['markdown','html','converter','pdf'],
  component: () => import('./markdown-to-html.vue'),
  icon: Markdown,
  category: 'Markdown',
};
