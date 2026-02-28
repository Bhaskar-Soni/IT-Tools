import { Math } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'math-evaluator',
  title: 'Math evaluator',
  description: 'A calculator for evaluating mathematical expressions. You can use functions like sqrt, cos, sin, abs, etc.',
  keywords: ['math','evaluator','calculator','expression','abs','acos','acosh','acot','acoth','acsc','acsch','asec','asech','asin','asinh','atan','atan2','atanh','cos','cosh','cot','coth','csc','csch','sec','sech','sin','sinh','sqrt','tan','tanh',],
  component: () => import('./math-evaluator.vue'),
  icon: Math,
  category: 'Maths',
};
