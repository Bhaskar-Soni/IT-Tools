import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'select',
  title: 'Select',
  description: 'A collection of select resources and tools',
  keywords: ['select'],
  category: 'PowerShell Commands',
  component: () => import('./select.vue'),
  icon: Terminal,
};

