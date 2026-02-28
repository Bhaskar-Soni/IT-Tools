import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'disable-dhcp-for-interface',
  title: 'Disable Dhcp For Interface',
  description: 'A collection of disable dhcp for interface resources and tools',
  keywords: ['disable-dhcp-for-interface'],
  category: 'Linux Commands',
  component: () => import('./disable-dhcp-for-interface.vue'),
  icon: Terminal,
};

