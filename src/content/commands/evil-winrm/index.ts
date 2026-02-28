import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'evil-winrm',
  title: 'Evil Winrm',
  description: 'A collection of evil winrm resources and tools',
  keywords: ['evil-winrm'],
  category: 'Hunting Commands',
  component: () => import('./evil-winrm.vue'),
  icon: Terminal,
};


