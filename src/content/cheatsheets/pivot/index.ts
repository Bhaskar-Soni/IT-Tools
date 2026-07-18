import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'pivot',
  title: 'Pivot',
  description: 'A collection of pivot resources and tools',
  keywords: ['pivot'],
  category: 'Post Exploitation',
  component: () => import('./pivot.vue'),
  icon: FileText,
};

