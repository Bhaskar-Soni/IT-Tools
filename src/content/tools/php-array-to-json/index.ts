import { BrandPhp } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'php-array-to-json',
  title: 'PHP-Array to JSON',
  description: 'Convert PHP Array to JSON',
  keywords: ['php','array','json'],
  component: () => import('./php-array-to-json.vue'),
  icon: BrandPhp,
  category: 'JSON',
};
