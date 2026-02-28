import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'macos-security',
  title: 'Macos Security',
  description: 'A collection of macos security resources and tools',
  keywords: ['macos-security'],
  category: 'OS System',
  component: () => import('./macos-security.vue'),
  icon: FileText,
};

