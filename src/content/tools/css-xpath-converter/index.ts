import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'css-xpath-converter',
  title: 'CSS XPath Converter',
  description: 'Convert CSS selector to/from XPath expression',
  keywords: ['css','xpath','converter'],
  component: () => import('./css-xpath-converter.vue'),
  icon: Braces,
  category: 'Web',
};
