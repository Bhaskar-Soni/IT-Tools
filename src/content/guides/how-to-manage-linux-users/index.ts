import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-manage-linux-users',
  title: 'How To Manage Linux Users',
  description: 'A collection of how to manage linux users resources and tools',
  keywords: ['how-to-manage-linux-users'],
  category: 'How-To Guides',
  component: () => import('./how-to-manage-linux-users.vue'),
  icon: Book,
};

