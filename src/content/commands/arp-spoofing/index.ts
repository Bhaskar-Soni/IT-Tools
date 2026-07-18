import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'arp-spoofing',
  title: 'Arp Spoofing',
  description: 'A collection of arp spoofing resources and tools',
  keywords: ['arp-spoofing'],
  category: 'Linux Commands',
  component: () => import('./arp-spoofing.vue'),
  icon: Terminal,
};

