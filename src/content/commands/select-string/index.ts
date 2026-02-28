import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'select-string',
  title: 'Select String',
  description: 'A collection of select string resources and tools',
  keywords: ['select-string'],
  category: 'PowerShell Commands',
  component: () => import('./select-string.vue'),
  icon: Terminal,
};

