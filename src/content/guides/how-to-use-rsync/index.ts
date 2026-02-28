import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-use-rsync',
  title: 'How To Use Rsync',
  description: 'A collection of how to use rsync resources and tools',
  keywords: ['how-to-use-rsync'],
  category: 'How-To Guides',
  component: () => import('./how-to-use-rsync.vue'),
  icon: Book,
};

