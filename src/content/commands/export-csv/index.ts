import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'export-csv',
  title: 'Export Csv',
  description: 'A collection of export csv resources and tools',
  keywords: ['export-csv'],
  category: 'PowerShell Commands',
  component: () => import('./export-csv.vue'),
  icon: Terminal,
};

