import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-toml',
  title: 'JSON to TOML',
  description: 'Parse and convert JSON to TOML.',
  keywords: ['json','parse','toml','convert','transform'],
  component: () => import('./json-to-toml.vue'),
  icon: Braces,
  category: 'JSON',
};
