import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ufw',
  title: 'Ufw',
  description: 'A collection of ufw resources and tools',
  keywords: ['ufw'],
  category: 'Linux Commands',
  component: () => import('./ufw.vue'),
  icon: Terminal,
};

