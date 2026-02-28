import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nslookup',
  title: 'Nslookup',
  description: 'A collection of nslookup resources and tools',
  keywords: ['nslookup'],
  category: 'Network Commands',
  component: () => import('./nslookup.vue'),
  icon: Terminal,
};

