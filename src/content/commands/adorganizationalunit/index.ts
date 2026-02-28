import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'adorganizationalunit',
  title: 'Adorganizationalunit',
  description: 'A collection of adorganizationalunit resources and tools',
  keywords: ['adorganizationalunit'],
  category: 'Tool Commands',
  component: () => import('./adorganizationalunit.vue'),
  icon: Terminal,
};

