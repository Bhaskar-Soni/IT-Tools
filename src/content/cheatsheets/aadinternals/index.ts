import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'aadinternals',
  title: 'Aadinternals',
  description: 'A collection of aadinternals resources and tools',
  keywords: ['aadinternals'],
  category: 'Cloud Identity',
  component: () => import('./aadinternals.vue'),
  icon: FileText,
};

