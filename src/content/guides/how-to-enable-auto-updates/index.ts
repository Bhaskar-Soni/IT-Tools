import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-enable-auto-updates',
  title: 'How To Enable Auto Updates',
  description: 'A collection of how to enable auto updates resources and tools',
  keywords: ['how-to-enable-auto-updates'],
  category: 'How-To Guides',
  component: () => import('./how-to-enable-auto-updates.vue'),
  icon: Book,
};

