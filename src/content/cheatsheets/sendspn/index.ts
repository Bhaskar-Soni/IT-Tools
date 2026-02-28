import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sendspn',
  title: 'Sendspn',
  description: 'A collection of sendspn resources and tools',
  keywords: ['sendspn'],
  category: 'Windows AD Attacks',
  component: () => import('./sendspn.vue'),
  icon: FileText,
};

