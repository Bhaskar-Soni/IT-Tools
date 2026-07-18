import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'check-system-information',
  title: 'Check System Information',
  description: 'A collection of check system information resources and tools',
  keywords: ['check-system-information'],
  category: 'Beginner Guides',
  component: () => import('./check-system-information.vue'),
  icon: Book,
};

