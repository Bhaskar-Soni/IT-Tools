import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'azure-conditional-access-basics',
  title: 'Azure Conditional Access Basics',
  description: 'A collection of azure conditional access basics resources and tools',
  keywords: ['azure-conditional-access-basics'],
  category: 'Cloud',
  component: () => import('./azure-conditional-access-basics.vue'),
  icon: FileText,
};

