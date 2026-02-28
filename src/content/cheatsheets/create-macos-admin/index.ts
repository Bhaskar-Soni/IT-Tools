import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'create-macos-admin',
  title: 'Create Macos Admin',
  description: 'A collection of create macos admin resources and tools',
  keywords: ['create-macos-admin'],
  category: 'OS System',
  component: () => import('./create-macos-admin.vue'),
  icon: FileText,
};

