import { EqualNot } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'math-formats-converter',
  title: 'Math Formats Converter',
  description: 'Convert mathematical expression between formats',
  keywords: ['math','formats','converter','latex','mathml','asciimath','omml','html'],
  component: () => import('./math-formats-converter.vue'),
  icon: EqualNot,
  category: 'Maths',
};
