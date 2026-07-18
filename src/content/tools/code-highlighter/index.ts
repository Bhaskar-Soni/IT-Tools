import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'code-highlighter',
  title: 'Code/Scripts Highlighter',
  description: 'Highlight programming code fragments',
  keywords: ['code','highlighter'],
  component: () => import('./code-highlighter.vue'),
  icon: Code,
  category: 'Development',
};
