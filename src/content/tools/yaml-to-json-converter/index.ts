import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'yaml-to-json-converter',
  title: 'YAML to JSON converter',
  description: 'Simply convert YAML to JSON with this online live converter.',
  keywords: ['yaml','to','json'],
  component: () => import('./yaml-to-json.vue'),
  icon: AlignJustified,
  category: 'YAML',
};
