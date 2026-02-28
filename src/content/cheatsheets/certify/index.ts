import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'certify',
  title: 'Certify',
  description: 'A collection of certify resources and tools',
  keywords: ['certify'],
  category: 'Windows AD Attacks',
  component: () => import('./certify.vue'),
  icon: FileText,
};

