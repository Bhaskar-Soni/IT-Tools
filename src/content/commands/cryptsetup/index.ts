import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'cryptsetup',
  title: 'Cryptsetup',
  description: 'A collection of cryptsetup resources and tools',
  keywords: ['cryptsetup'],
  category: 'Linux Commands',
  component: () => import('./cryptsetup.vue'),
  icon: Terminal,
};

