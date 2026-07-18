import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'yaml-to-toml',
  title: 'YAML to TOML',
  description: 'Parse and convert YAML to TOML.',
  keywords: ['yaml','to','toml','convert','transform'],
  component: () => import('./yaml-to-toml.vue'),
  icon: AlignJustified,
  category: 'YAML',
};
