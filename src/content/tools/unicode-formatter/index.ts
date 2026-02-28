import { Edit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'unicode-formatter',
  title: 'Unicode Formatter',
  description: 'Format text using Unicode fonts',
  keywords: ['unicode','formatter','fonts'],
  component: () => import('./unicode-formatter.vue'),
  icon: Edit,
  category: 'Text',
};
