import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'applocker-policy',
  title: 'Applocker Policy',
  description: 'A collection of applocker policy resources and tools',
  keywords: ['applocker-policy'],
  category: 'Windows Defense',
  component: () => import('./applocker-policy.vue'),
  icon: FileText,
};

