import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smbmap',
  title: 'Smbmap',
  description: 'A collection of smbmap resources and tools',
  keywords: ['smbmap'],
  category: 'Linux Commands',
  component: () => import('./smbmap.vue'),
  icon: Terminal,
};

