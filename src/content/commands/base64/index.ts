import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'base64',
  title: 'Base64',
  description: 'A collection of base64 resources and tools',
  keywords: ['base64'],
  category: 'MISC Commands',
  component: () => import('./base64.vue'),
  icon: Terminal,
};

