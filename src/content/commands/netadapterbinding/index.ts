import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'netadapterbinding',
  title: 'Netadapterbinding',
  description: 'A collection of netadapterbinding resources and tools',
  keywords: ['netadapterbinding'],
  category: 'Network Commands',
  component: () => import('./netadapterbinding.vue'),
  icon: Terminal,
};

