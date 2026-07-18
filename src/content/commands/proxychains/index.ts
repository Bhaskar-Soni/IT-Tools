import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'proxychains',
  title: 'Proxychains',
  description: 'A collection of proxychains resources and tools',
  keywords: ['proxychains'],
  category: 'Linux Commands',
  component: () => import('./proxychains.vue'),
  icon: Terminal,
};

