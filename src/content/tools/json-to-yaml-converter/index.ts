import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-yaml-converter',
  title: 'JSON to YAML converter',
  description: 'Simply convert JSON to YAML with this live online converter.',
  keywords: ['yaml','to','json'],
  component: () => import('./json-to-yaml.vue'),
  icon: Braces,
  category: 'JSON',
};
