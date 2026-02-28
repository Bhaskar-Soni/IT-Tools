import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'azurehound',
  title: 'Azurehound',
  description: 'A collection of azurehound resources and tools',
  keywords: ['azurehound'],
  category: 'Cloud Identity',
  component: () => import('./azurehound.vue'),
  icon: FileText,
};

