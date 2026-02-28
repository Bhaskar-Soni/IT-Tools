import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-secure-shared-memory',
  title: 'How To Secure Shared Memory',
  description: 'A collection of how to secure shared memory resources and tools',
  keywords: ['how-to-secure-shared-memory'],
  category: 'How-To Guides',
  component: () => import('./how-to-secure-shared-memory.vue'),
  icon: Book,
};

