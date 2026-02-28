import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'xpath',
  title: 'XPath Cheatsheet',
  description: 'XPath query syntax and expressions reference',
  keywords: ['xpath', 'xml', 'query', 'selector'],
  category: 'Development',
  component: () => import('./xpath.vue'),
  icon: Code,
};


