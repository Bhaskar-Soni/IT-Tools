import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-setup-swap',
  title: 'How To Setup Swap',
  description: 'A collection of how to setup swap resources and tools',
  keywords: ['how-to-setup-swap'],
  category: 'How-To Guides',
  component: () => import('./how-to-setup-swap.vue'),
  icon: Book,
};

