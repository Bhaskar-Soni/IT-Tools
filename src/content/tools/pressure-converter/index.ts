import { Atom } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pressure-converter',
  title: 'Pressure Units Converter',
  description: 'Convert values between pressure units',
  keywords: ['pressure','converter','units','pascal','bar','torr','atmosphere',],
  component: () => import('./pressure-converter.vue'),
  icon: Atom,
  category: 'Physics',
};
