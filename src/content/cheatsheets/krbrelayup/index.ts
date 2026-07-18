import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'krbrelayup',
  title: 'Krbrelayup',
  description: 'A collection of krbrelayup resources and tools',
  keywords: ['krbrelayup'],
  category: 'Windows AD Attacks',
  component: () => import('./krbrelayup.vue'),
  icon: FileText,
};

