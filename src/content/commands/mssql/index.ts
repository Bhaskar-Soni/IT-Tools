import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mssql',
  title: 'Mssql',
  description: 'A collection of mssql resources and tools',
  keywords: ['mssql'],
  category: 'Hunting Commands',
  component: () => import('./mssql.vue'),
  icon: Terminal,
};

