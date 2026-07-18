import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'yaml-prettify',
  title: 'YAML prettify and format',
  description: 'Prettify your YAML string into a friendly, human-readable format.',
  keywords: ['yaml','viewer','prettify','format','lint','validator','schema'],
  component: () => import('./yaml-viewer.vue'),
  icon: AlignJustified,
  category: 'Uncategorized',
};
