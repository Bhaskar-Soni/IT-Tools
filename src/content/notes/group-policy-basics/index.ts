import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'group-policy-basics',
  title: 'Group Policy Basics',
  description: 'A collection of group policy basics resources and tools',
  keywords: ['group-policy-basics'],
  category: 'Identity & AD',
  component: () => import('./group-policy-basics.vue'),
  icon: FileText,
};

