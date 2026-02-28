import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'yaml-merger',
  title: 'YAML Merger',
  description: 'Merge deeply two YAML content',
  keywords: ['yaml','merger'],
  component: () => import('./yaml-merger.vue'),
  icon: AlignJustified,
  category: 'YAML',
};
