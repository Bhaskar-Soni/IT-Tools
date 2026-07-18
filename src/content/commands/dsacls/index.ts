import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dsacls',
  title: 'Dsacls',
  description: 'A collection of dsacls resources and tools',
  keywords: ['dsacls'],
  category: 'Tool Commands',
  component: () => import('./dsacls.vue'),
  icon: Terminal,
};

