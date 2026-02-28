import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'certreq',
  title: 'Certreq',
  description: 'A collection of certreq resources and tools',
  keywords: ['certreq'],
  category: 'Windows Commands',
  component: () => import('./certreq.vue'),
  icon: Terminal,
};

