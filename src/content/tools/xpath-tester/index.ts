import { Brackets } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'xpath-tester',
  title: 'XPath Tester',
  description: 'Test XPath expression against XML content',
  keywords: ['xpath','xml','tester'],
  component: () => import('./xpath-tester.vue'),
  icon: Brackets,
  category: 'XML',
};
