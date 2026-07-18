import { Brackets } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'toml-to-json',
  title: 'TOML to JSON',
  description: 'Parse and convert TOML to JSON.',
  keywords: ['toml','json','convert','online','transform','parser'],
  component: () => import('./toml-to-json.vue'),
  icon: Brackets,
  category: 'TOML',
};
