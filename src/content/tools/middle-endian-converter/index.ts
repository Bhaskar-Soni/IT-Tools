import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'middle-endian-converter',
  title: 'Middle-Endian Converter',
  description: 'Convert bytes from Middle-Endian to Little/Big Endian for given bits precision and type of Middle Endian',
  keywords: ['middle','endian','converter'],
  component: () => import('./middle-endian-converter.vue'),
  icon: Binary,
  category: 'Forensic',
};
