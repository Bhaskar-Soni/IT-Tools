import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-create-ssh-keys',
  title: 'How To Create Ssh Keys',
  description: 'A collection of how to create ssh keys resources and tools',
  keywords: ['how-to-create-ssh-keys'],
  category: 'How-To Guides',
  component: () => import('./how-to-create-ssh-keys.vue'),
  icon: Book,
};

