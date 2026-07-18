import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'efibootmgr',
  title: 'Efibootmgr',
  description: 'A collection of efibootmgr resources and tools',
  keywords: ['efibootmgr'],
  category: 'Linux Commands',
  component: () => import('./efibootmgr.vue'),
  icon: Terminal,
};

