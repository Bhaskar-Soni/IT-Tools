import { FileSearch } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'url-text-fragment-maker',
  title: 'Url Text Search Fragment Maker',
  description: 'Create url that allows linking directly to a specific portion of text in a web document',
  keywords: ['url','text','fragment'],
  component: () => import('./url-text-fragment-maker.vue'),
  icon: FileSearch,
  category: 'Web',
};
