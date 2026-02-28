import { Books } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'isbn-validator-and-parser',
  title: 'ISBN Validator and Parser',
  description: 'Parse, validate, format and get infos for an ISBN',
  keywords: ['isbn','validator','parser','formatter'],
  component: () => import('./isbn-validator-and-parser.vue'),
  icon: Books,
  category: 'Data',
};
