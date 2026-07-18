import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'port-scan-tcp',
  title: 'Port Scan Tcp',
  description: 'A collection of port scan tcp resources and tools',
  keywords: ['port-scan-tcp'],
  category: 'Tool Commands',
  component: () => import('./port-scan-tcp.vue'),
  icon: Terminal,
};

