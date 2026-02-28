import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'checkpoint',
  title: 'Checkpoint',
  description: 'A collection of checkpoint resources and tools',
  keywords: ['checkpoint'],
  category: 'Vendor Specific',
  component: () => import('./checkpoint.vue'),
  icon: FileText,
};

