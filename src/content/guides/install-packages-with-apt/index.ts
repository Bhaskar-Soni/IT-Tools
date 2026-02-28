import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'install-packages-with-apt',
  title: 'Install Packages With Apt',
  description: 'A collection of install packages with apt resources and tools',
  keywords: ['install-packages-with-apt'],
  category: 'Beginner Guides',
  component: () => import('./install-packages-with-apt.vue'),
  icon: Book,
};

