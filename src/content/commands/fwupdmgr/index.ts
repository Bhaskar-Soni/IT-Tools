import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fwupdmgr',
  title: 'Fwupdmgr',
  description: 'A collection of fwupdmgr resources and tools',
  keywords: ['fwupdmgr'],
  category: 'Linux Commands',
  component: () => import('./fwupdmgr.vue'),
  icon: Terminal,
};

