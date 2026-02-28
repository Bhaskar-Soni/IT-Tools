import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-rotate-logs',
  title: 'How To Rotate Logs',
  description: 'A collection of how to rotate logs resources and tools',
  keywords: ['how-to-rotate-logs'],
  category: 'How-To Guides',
  component: () => import('./how-to-rotate-logs.vue'),
  icon: Book,
};

