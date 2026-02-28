import { ArrowsLeftRight } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'floating-point-converter',
  title: 'Floating Point Number Converter',
  description: 'Convert between decimal and binary representations of floating point numbers (IEEE 754)',
  keywords: ['converter','floating','point','number','converter','binary','decimal'],
  component: () => import('./floating-point-number-converter.vue'),
  icon: ArrowsLeftRight,
  category: 'Uncategorized',
};
