import { BrandCss3 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'css-prettifier',
  title: 'Css prettifier',
  description: 'CSS Prettify',
  keywords: ['css','prettifier','beautify','prettier','format'],
  component: () => import('./css-prettifier.vue'),
  icon: BrandCss3,
  category: 'Web',
};
