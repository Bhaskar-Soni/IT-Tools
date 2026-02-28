import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lets-encrypt',
  title: 'Lets Encrypt',
  description: 'A collection of lets encrypt resources and tools',
  keywords: ['lets-encrypt'],
  category: 'Tool Commands',
  component: () => import('./lets-encrypt.vue'),
  icon: Terminal,
};

