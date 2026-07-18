import { BrandPhp } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-php-array',
  title: 'Json to PHP-Array',
  description: 'Convert JSON to PHP Array',
  keywords: ['json','php','array'],
  component: () => import('./json-to-php-array.vue'),
  icon: BrandPhp,
  category: 'JSON',
};
