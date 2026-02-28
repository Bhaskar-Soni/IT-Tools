import { GitCompare } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'font-compare',
  title: 'Font Compare',
  description: 'Compare to fonts on a given text',
  keywords: ['font','ttf','otf','compare'],
  component: () => import('./font-compare.vue'),
  icon: GitCompare,
  category: 'Text',
};
