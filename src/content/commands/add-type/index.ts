import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'add-type',
  title: 'Add Type',
  description: 'A collection of add type resources and tools',
  keywords: ['add-type'],
  category: 'PowerShell Commands',
  component: () => import('./add-type.vue'),
  icon: Terminal,
};

