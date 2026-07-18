import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'msiexec',
  title: 'Msiexec',
  description: 'A collection of msiexec resources and tools',
  keywords: ['msiexec'],
  category: 'Windows Commands',
  component: () => import('./msiexec.vue'),
  icon: Terminal,
};

