import { TextWrap } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-to-unicode',
  title: 'Text to Unicode',
  description: 'Parse and convert text to unicode and vice-versa',
  keywords: ['text','to','unicode'],
  component: () => import('./text-to-unicode.vue'),
  icon: TextWrap,
  category: 'Converters',
};
