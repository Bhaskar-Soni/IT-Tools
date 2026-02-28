import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'openssl',
  title: 'Openssl',
  description: 'A collection of openssl resources and tools',
  keywords: ['openssl'],
  category: 'Linux Commands',
  component: () => import('./openssl.vue'),
  icon: Terminal,
};

