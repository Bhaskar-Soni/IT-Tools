import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-clean-up-disk-space',
  title: 'How To Clean Up Disk Space',
  description: 'A collection of how to clean up disk space resources and tools',
  keywords: ['how-to-clean-up-disk-space'],
  category: 'How-To Guides',
  component: () => import('./how-to-clean-up-disk-space.vue'),
  icon: Book,
};

