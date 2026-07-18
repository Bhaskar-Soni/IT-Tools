import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'whois',
  title: 'Whois',
  description: 'A collection of whois resources and tools',
  keywords: ['whois'],
  category: 'Linux Commands',
  component: () => import('./whois.vue'),
  icon: Terminal,
};

