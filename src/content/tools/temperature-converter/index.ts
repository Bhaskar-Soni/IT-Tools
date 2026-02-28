import { Temperature } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'temperature-converter',
  title: 'Temperature converter',
  description: 'Degrees temperature conversions for Kelvin, Celsius, Fahrenheit, Rankine, Delisle, Newton, Réaumur, and Rømer.',
  keywords: ['temperature','converter','degree','Kelvin','Celsius','Fahrenheit','Rankine','Delisle','Newton','Réaumur','Rømer','units',],
  component: () => import('./temperature-converter.vue'),
  icon: Temperature,
  category: 'Physics',
};
