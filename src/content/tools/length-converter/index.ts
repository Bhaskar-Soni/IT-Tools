import { SquareHalf } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'length-converter',
  title: 'Length Units Converter',
  description: 'Convert values from length units',
  keywords: ['length','converter','units','meter','foot','feet','inch','yard','mile','pica','parsec','light',],
  component: () => import('./length-converter.vue'),
  icon: SquareHalf,
  category: 'Physics',
};
