import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'env-variables-converter',
  title: 'Env Variables Format Converter',
  description: 'Convert between common env vars format and yaml',
  keywords: ['env','environment','variables','yaml','converter'],
  component: () => import('./env-variables-converter.vue'),
  icon: Terminal,
  category: 'Converters',
};
