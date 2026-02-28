import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'az',
  title: 'Az',
  description: 'A collection of az resources and tools',
  keywords: ['az'],
  category: 'Cloud Identity',
  component: () => import('./az.vue'),
  icon: FileText,
};

