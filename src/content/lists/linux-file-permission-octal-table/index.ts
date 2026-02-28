import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'linux-file-permission-octal-table',
  title: 'Linux File Permission Octal Table',
  description: 'A collection of linux file permission octal table resources and tools',
  keywords: ['linux-file-permission-octal-table'],
  category: 'Uncategorized',
  component: () => import('./linux-file-permission-octal-table.vue'),
  icon: FileText,
};

