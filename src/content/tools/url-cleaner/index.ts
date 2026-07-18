import { ClearAll } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'url-cleaner',
  title: 'Url Cleaner',
  description: 'Clean Ads tracker, UTM, Facebook and other ads provider parameters from an URL',
  keywords: ['url','cleaner','utm','fbclip'],
  component: () => import('./url-cleaner.vue'),
  icon: ClearAll,
  category: 'Web',
};
