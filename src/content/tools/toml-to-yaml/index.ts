import { Brackets } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'toml-to-yaml',
  title: 'TOML to YAML',
  description: 'Parse and convert TOML to YAML.',
  keywords: ['toml','yaml','convert','online','transform','parse'],
  component: () => import('./toml-to-yaml.vue'),
  icon: Brackets,
  category: 'TOML',
};
