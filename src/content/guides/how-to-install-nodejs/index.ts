import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-install-nodejs',
  title: 'How To Install Nodejs',
  description: 'A collection of how to install nodejs resources and tools',
  keywords: ['how-to-install-nodejs'],
  category: 'How-To Guides',
  component: () => import('./how-to-install-nodejs.vue'),
  icon: Book,
};

