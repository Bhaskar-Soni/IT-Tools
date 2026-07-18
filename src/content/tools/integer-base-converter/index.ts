import { ArrowsLeftRight } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'base-converter',
  title: 'Integer base converter',
  description: '>-',
  keywords: ['integer','number','base','conversion','decimal','hexadecimal','binary','octal','base64'],
  component: () => import('./integer-base-converter.vue'),
  icon: ArrowsLeftRight,
  category: 'Uncategorized',
};
