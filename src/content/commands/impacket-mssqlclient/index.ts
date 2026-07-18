import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-mssqlclient',
  title: 'Impacket Mssqlclient',
  description: 'A collection of impacket mssqlclient resources and tools',
  keywords: ['impacket-mssqlclient'],
  category: 'Hunting Commands',
  component: () => import('./impacket-mssqlclient.vue'),
  icon: Terminal,
};


