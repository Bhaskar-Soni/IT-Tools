import { BrandHtml5 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-prettifier',
  title: 'Html Prettifier',
  description: 'Prettify HTML code',
  keywords: ['html','prettifier','beautify','prettier','format'],
  component: () => import('./html-prettifier.vue'),
  icon: BrandHtml5,
  category: 'Web',
};
