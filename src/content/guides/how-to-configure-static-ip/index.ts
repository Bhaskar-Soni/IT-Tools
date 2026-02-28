import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-configure-static-ip',
  title: 'How To Configure Static Ip',
  description: 'A collection of how to configure static ip resources and tools',
  keywords: ['how-to-configure-static-ip'],
  category: 'How-To Guides',
  component: () => import('./how-to-configure-static-ip.vue'),
  icon: Book,
};

