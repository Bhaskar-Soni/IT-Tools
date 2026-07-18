import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'active-directory',
  title: 'Active Directory',
  description: 'A collection of active directory resources and tools',
  keywords: ['active-directory'],
  category: 'Identity & AD',
  component: () => import('./active-directory.vue'),
  icon: FileText,
};

