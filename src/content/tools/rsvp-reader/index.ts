import { Books } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rsvp-reader',
  title: 'RSVP Reader',
  description: 'Read RSVP files',
  keywords: ['rsvp','reader'],
  component: () => import('./rsvp-reader.vue'),
  icon: Books,
  category: 'Text',
};
