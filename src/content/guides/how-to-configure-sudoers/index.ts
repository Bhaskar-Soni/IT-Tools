import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-configure-sudoers',
  title: 'How To Configure Sudoers',
  description: 'A collection of how to configure sudoers resources and tools',
  keywords: ['how-to-configure-sudoers'],
  category: 'How-To Guides',
  component: () => import('./how-to-configure-sudoers.vue'),
  icon: Book,
};

