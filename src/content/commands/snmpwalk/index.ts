import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'snmpwalk',
  title: 'Snmpwalk',
  description: 'A collection of snmpwalk resources and tools',
  keywords: ['snmpwalk'],
  category: 'Linux Commands',
  component: () => import('./snmpwalk.vue'),
  icon: Terminal,
};

