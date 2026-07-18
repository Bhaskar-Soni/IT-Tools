import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-prettify',
  title: 'JSON prettify and format',
  description: 'Prettify your JSON string into a friendly, human-readable format.',
  keywords: ['json','viewer','prettify','format','lint','validator','schema','repair'],
  component: () => import('./json-viewer.vue'),
  icon: Braces,
  category: 'Uncategorized',
};
