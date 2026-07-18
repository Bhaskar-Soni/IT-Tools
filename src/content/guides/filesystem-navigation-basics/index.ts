import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'filesystem-navigation-basics',
  title: 'Filesystem Navigation Basics',
  description: 'A collection of filesystem navigation basics resources and tools',
  keywords: ['filesystem-navigation-basics'],
  category: 'Beginner Guides',
  component: () => import('./filesystem-navigation-basics.vue'),
  icon: Book,
};

