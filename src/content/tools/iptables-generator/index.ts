import { Firetruck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'iptables-generator',
  title: 'Iptables Generator',
  description: 'Generate iptables command lines',
  keywords: ['iptables','firewall'],
  component: () => import('./iptables-generator.vue'),
  icon: Firetruck,
  category: 'Network',
};
