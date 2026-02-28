import { MathSymbols } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'si-prefixes-converter',
  title: 'SI Prefixes Converter',
  description: 'Convert between Metric Prefixes',
  keywords: ['si','international','metric','units','converter'],
  component: () => import('./si-prefixes-converter.vue'),
  icon: MathSymbols,
  category: 'Physics',
};
