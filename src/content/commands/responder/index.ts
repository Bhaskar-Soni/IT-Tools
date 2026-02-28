import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'responder',
  title: 'Responder',
  description: 'A collection of responder resources and tools',
  keywords: ['responder'],
  category: 'Linux Commands',
  component: () => import('./responder.vue'),
  icon: Terminal,
};

