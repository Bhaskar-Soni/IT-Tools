import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'xml-linter',
  title: 'XML Linter',
  description: 'Lint XML content for syntax error',
  keywords: ['xml','linter'],
  component: () => import('./xml-linter.vue'),
  icon: Code,
  category: 'XML',
};
