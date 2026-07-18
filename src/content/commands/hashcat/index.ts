import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'hashcat',
  title: 'Hashcat',
  description: 'A collection of hashcat resources and tools',
  keywords: ['hashcat'],
  category: 'Linux Commands',
  component: () => import('./hashcat.vue'),
  icon: Terminal,
};

