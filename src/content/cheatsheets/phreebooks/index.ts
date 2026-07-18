import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'phreebooks',
  title: 'Phreebooks',
  description: 'A collection of phreebooks resources and tools',
  keywords: ['phreebooks'],
  category: 'CMS Platforms',
  component: () => import('./phreebooks.vue'),
  icon: FileText,
};

