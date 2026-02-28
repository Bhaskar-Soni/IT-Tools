import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'test-permissions',
  title: 'Test Permissions',
  description: 'A collection of test permissions resources and tools',
  keywords: ['test-permissions'],
  category: 'OS System',
  component: () => import('./test-permissions.vue'),
  icon: FileText,
};

