import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'base64encodedecode',
  title: 'Base64encodedecode',
  description: 'A collection of base64encodedecode resources and tools',
  keywords: ['base64encodedecode'],
  category: 'Tool Commands',
  component: () => import('./base64encodedecode.vue'),
  icon: Terminal,
};

