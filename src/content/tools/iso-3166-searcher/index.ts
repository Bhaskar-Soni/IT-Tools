import { Flag } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'iso-3166-searcher',
  title: 'ISO 3166 Country Codes Searcher',
  description: 'Allow searching for Country Code (ISO 3166) and info',
  keywords: ['iso','iso2','iso3','phone','currency','timezones','domain','lang','iso3166','country','ccltd','searcher'],
  component: () => import('./iso-3166-searcher.vue'),
  icon: Flag,
  category: 'Data',
};
