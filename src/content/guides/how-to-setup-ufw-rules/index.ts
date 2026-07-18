import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-setup-ufw-rules',
  title: 'How To Setup Ufw Rules',
  description: 'A collection of how to setup ufw rules resources and tools',
  keywords: ['how-to-setup-ufw-rules'],
  category: 'How-To Guides',
  component: () => import('./how-to-setup-ufw-rules.vue'),
  icon: Book,
};

