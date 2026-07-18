import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smbshare',
  title: 'Smbshare',
  description: 'A collection of smbshare resources and tools',
  keywords: ['smbshare'],
  category: 'Network Commands',
  component: () => import('./smbshare.vue'),
  icon: Terminal,
};

