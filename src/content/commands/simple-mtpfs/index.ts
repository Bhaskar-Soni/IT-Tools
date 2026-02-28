import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'simple-mtpfs',
  title: 'Simple Mtpfs',
  description: 'A collection of simple mtpfs resources and tools',
  keywords: ['simple-mtpfs'],
  category: 'Linux Commands',
  component: () => import('./simple-mtpfs.vue'),
  icon: Terminal,
};

