import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'securityidentifier',
  title: 'Securityidentifier',
  description: 'A collection of securityidentifier resources and tools',
  keywords: ['securityidentifier'],
  category: 'Identity & AD',
  component: () => import('./securityidentifier.vue'),
  icon: FileText,
};

