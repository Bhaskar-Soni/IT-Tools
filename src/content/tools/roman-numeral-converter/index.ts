import { LetterX } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'roman-numeral-converter',
  title: 'Roman numeral converter',
  description: 'Convert Roman numerals to numbers and convert numbers to Roman numerals.',
  keywords: ['roman','arabic','converter','X','I','V','L','C','D','M'],
  component: () => import('./roman-numeral-converter.vue'),
  icon: LetterX,
  category: 'Converters',
};
