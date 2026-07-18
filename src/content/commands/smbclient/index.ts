import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smbclient',
  title: 'Smbclient',
  description: 'A collection of smbclient resources and tools',
  keywords: ['smbclient'],
  category: 'Hunting Commands',
  component: () => import('./smbclient.vue'),
  icon: Terminal,
};

