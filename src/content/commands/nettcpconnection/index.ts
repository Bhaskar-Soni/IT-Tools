import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nettcpconnection',
  title: 'Nettcpconnection',
  description: 'A collection of nettcpconnection resources and tools',
  keywords: ['nettcpconnection'],
  category: 'Network Commands',
  component: () => import('./nettcpconnection.vue'),
  icon: Terminal,
};

