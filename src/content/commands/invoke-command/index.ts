import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'invoke-command',
  title: 'Invoke Command',
  description: 'A collection of invoke command resources and tools',
  keywords: ['invoke-command'],
  category: 'Windows Commands',
  component: () => import('./invoke-command.vue'),
  icon: Terminal,
};

