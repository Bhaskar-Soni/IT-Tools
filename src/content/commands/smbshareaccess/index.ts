import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smbshareaccess',
  title: 'Smbshareaccess',
  description: 'A collection of smbshareaccess resources and tools',
  keywords: ['smbshareaccess'],
  category: 'Network Commands',
  component: () => import('./smbshareaccess.vue'),
  icon: Terminal,
};

