import { Language } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-to-unicode-names',
  title: 'Text to Unicode Names',
  description: 'Convert a text to its hexadecimal character codes and Unicode Names for each character',
  keywords: ['text','unicode','name','hexa','char','code'],
  component: () => import('./text-to-unicode-names.vue'),
  icon: Language,
  category: 'Text',
};
