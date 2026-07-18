import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'clixml',
  title: 'Clixml',
  description: 'A collection of clixml resources and tools',
  keywords: ['clixml'],
  category: 'PowerShell Commands',
  component: () => import('./clixml.vue'),
  icon: Terminal,
};

