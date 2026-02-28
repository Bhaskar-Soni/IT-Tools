import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-configure-ntp',
  title: 'How To Configure Ntp',
  description: 'A collection of how to configure ntp resources and tools',
  keywords: ['how-to-configure-ntp'],
  category: 'How-To Guides',
  component: () => import('./how-to-configure-ntp.vue'),
  icon: Book,
};

