import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-to-docx',
  title: 'Markdown to DOCX',
  description: 'Convert Markdown documents to Word/DOCX document format with live preview and custom styling support.',
  keywords: ['markdown','word','docx'],
  component: () => import('./markdown-to-docx.vue'),
  icon: Markdown,
  category: 'Markdown',
};
