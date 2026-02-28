import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'keepass2john',
  title: 'Keepass2john',
  description: 'A collection of keepass2john resources and tools',
  keywords: ['keepass2john'],
  category: 'Linux Commands',
  component: () => import('./keepass2john.vue'),
  icon: Terminal,
};

