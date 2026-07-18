import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'testssl',
  title: 'Testssl',
  description: 'A collection of testssl resources and tools',
  keywords: ['testssl'],
  category: 'Linux Commands',
  component: () => import('./testssl.vue'),
  icon: Terminal,
};

