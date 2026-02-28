import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-check-open-ports',
  title: 'How To Check Open Ports',
  description: 'A collection of how to check open ports resources and tools',
  keywords: ['how-to-check-open-ports'],
  category: 'How-To Guides',
  component: () => import('./how-to-check-open-ports.vue'),
  icon: Book,
};

