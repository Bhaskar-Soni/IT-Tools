import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'azuread',
  title: 'Azuread',
  description: 'A collection of azuread resources and tools',
  keywords: ['azuread'],
  category: 'Cloud Identity',
  component: () => import('./azuread.vue'),
  icon: FileText,
};

