import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'css-selectors',
  title: 'CSS Selectors Cheatsheet',
  description: 'CSS selector patterns and syntax guide',
  keywords: ['css', 'selectors', 'styling', 'web'],
  category: 'Development',
  component: () => import('./css-selectors.vue'),
  icon: Braces,
};


