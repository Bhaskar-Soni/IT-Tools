import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-disable-root-login',
  title: 'How To Disable Root Login',
  description: 'A collection of how to disable root login resources and tools',
  keywords: ['how-to-disable-root-login'],
  category: 'How-To Guides',
  component: () => import('./how-to-disable-root-login.vue'),
  icon: Book,
};

