import { Cut } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'file-splitter',
  title: 'File Splitter',
  description: 'Split JSON, XML or text file either by group of nodes or by group of lines',
  keywords: ['file','json','xml','text','splitter'],
  component: () => import('./file-splitter.vue'),
  icon: Cut,
  category: 'Development',
};
