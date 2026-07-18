import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'github-markdown-emoji-markup',
  title: 'Github Markdown Emoji Markup',
  description: 'A collection of github markdown emoji markup resources and tools',
  keywords: ['github-markdown-emoji-markup'],
  category: 'Uncategorized',
  component: () => import('./github-markdown-emoji-markup.vue'),
  icon: FileText,
};

