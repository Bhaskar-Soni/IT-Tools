import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-filehash',
  title: 'Get Filehash',
  description: 'A collection of get filehash resources and tools',
  keywords: ['get-filehash'],
  category: 'Windows Commands',
  component: () => import('./get-filehash.vue'),
  icon: Terminal,
};

