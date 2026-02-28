import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'paths',
  title: 'Paths',
  description: 'A collection of paths resources and tools',
  keywords: ['paths'],
  category: 'Security Concepts',
  component: () => import('./paths.vue'),
  icon: FileText,
};

