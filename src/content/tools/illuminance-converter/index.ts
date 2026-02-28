import { Brightness2 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'illuminance-converter',
  title: 'Illuminance Converter',
  description: 'Illuminance units converter (Lux, Foot Candles, Nox, Phot, Flame)',
  keywords: ['illuminance','converter','lux','lx','foot','candles','fc','flame','nox','phot','units'],
  component: () => import('./illuminance-converter.vue'),
  icon: Brightness2,
  category: 'Physics',
};
