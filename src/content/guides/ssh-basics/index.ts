import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'ssh-basics',
  title: 'Ssh Basics',
  description: 'A collection of ssh basics resources and tools',
  keywords: ['ssh-basics'],
  category: 'Beginner Guides',
  component: () => import('./ssh-basics.vue'),
  icon: Book,
};

