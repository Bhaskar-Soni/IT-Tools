import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'change-mac-address',
  title: 'Change Mac Address',
  description: 'A collection of change mac address resources and tools',
  keywords: ['change-mac-address'],
  category: 'MISC Commands',
  component: () => import('./change-mac-address.vue'),
  icon: Terminal,
};

