import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'linux-terminal-basics',
  title: 'Linux Terminal Basics',
  description: 'A collection of linux terminal basics resources and tools',
  keywords: ['linux-terminal-basics'],
  category: 'Beginner Guides',
  component: () => import('./linux-terminal-basics.vue'),
  icon: Book,
};

