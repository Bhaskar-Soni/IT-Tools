import { List } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'list-converter',
  title: 'List converter',
  description: 'This tool can process column-based data and apply various changes (transpose, add prefix and suffix, reverse list, sort list, lowercase values, truncate values) to each row.',
  keywords: ['list','converter','sort','reverse','prefix','suffix','lowercase','truncate'],
  component: () => import('./list-converter.vue'),
  icon: List,
  category: 'Text',
};
