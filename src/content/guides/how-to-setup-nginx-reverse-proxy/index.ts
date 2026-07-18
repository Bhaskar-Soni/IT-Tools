import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-setup-nginx-reverse-proxy',
  title: 'How To Setup Nginx Reverse Proxy',
  description: 'A collection of how to setup nginx reverse proxy resources and tools',
  keywords: ['how-to-setup-nginx-reverse-proxy'],
  category: 'How-To Guides',
  component: () => import('./how-to-setup-nginx-reverse-proxy.vue'),
  icon: Book,
};

