import { BrandHtml5 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-cleaner',
  title: 'Html cleaner',
  description: 'Clean HTML',
  keywords: ['html','cleaner'],
  component: () => import('./html-cleaner.vue'),
  icon: BrandHtml5,
  category: 'Web',
};
