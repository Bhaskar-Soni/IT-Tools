import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'constrained-unconstrained-delegation',
  title: 'Constrained Unconstrained Delegation',
  description: 'A collection of constrained unconstrained delegation resources and tools',
  keywords: ['constrained-unconstrained-delegation'],
  category: 'Identity & AD',
  component: () => import('./constrained-unconstrained-delegation.vue'),
  icon: FileText,
};

