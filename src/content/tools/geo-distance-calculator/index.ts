import { WorldLatitude } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'geo-distance-calculator',
  title: 'Geo distance calculator',
  description: 'Compute distance between two geo location (and display current user location information)',
  keywords: ['geo','distance','calculator'],
  component: () => import('./geo-distance-calculator.vue'),
  icon: WorldLatitude,
  category: 'Measurement',
};
