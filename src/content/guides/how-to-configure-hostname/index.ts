import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-configure-hostname',
  title: 'How To Configure Hostname',
  description: 'A collection of how to configure hostname resources and tools',
  keywords: ['how-to-configure-hostname'],
  category: 'How-To Guides',
  component: () => import('./how-to-configure-hostname.vue'),
  icon: Book,
};

