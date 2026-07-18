import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'msfvenom',
  title: 'Msfvenom',
  description: 'A collection of msfvenom resources and tools',
  keywords: ['msfvenom'],
  category: 'Linux Commands',
  component: () => import('./msfvenom.vue'),
  icon: Terminal,
};

