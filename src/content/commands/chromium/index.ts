import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'chromium',
  title: 'Chromium',
  description: 'A collection of chromium resources and tools',
  keywords: ['chromium'],
  category: 'Tool Commands',
  component: () => import('./chromium.vue'),
  icon: Terminal,
};


