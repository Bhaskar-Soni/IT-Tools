import { BrandJavascript } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'javascript-prettifier',
  title: 'Javascript Prettifier',
  description: 'JS/Javascript Prettifier',
  keywords: ['javascript','prettifier','beautify','prettier','format'],
  component: () => import('./javascript-prettifier.vue'),
  icon: BrandJavascript,
  category: 'Java & JavaScript',
};
