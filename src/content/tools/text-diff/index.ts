import { FileDiff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-diff',
  title: 'Text diff',
  description: 'Compare two texts and see the differences between them.',
  keywords: ['text','diff','compare','string','textdiff','code'],
  layoutMode: 'wide',
  component: () => import('./text-diff.vue'),
  icon: FileDiff,
  category: 'Text',
};
