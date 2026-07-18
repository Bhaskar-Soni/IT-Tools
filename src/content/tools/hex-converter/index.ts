import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'hex-converter',
  title: 'Hex Encoder/Decoder',
  description: 'Encode and decode Hex buffers to number (bits, endianess, sign or floating point or chars) and structures',
  keywords: ['hex','encode','decode','endianess','float','bits','hex','struct'],
  component: () => import('./hex-converter.vue'),
  icon: Binary,
  category: 'Converters',
};
