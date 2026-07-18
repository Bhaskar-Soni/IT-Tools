import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'files',
  title: 'Files',
  description: 'A collection of files resources and tools',
  keywords: ['files'],
  category: 'Security Concepts',
  component: () => import('./files.vue'),
  icon: FileText,
};

