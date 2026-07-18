import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-install-docker-compose-plugin',
  title: 'How To Install Docker Compose Plugin',
  description: 'A collection of how to install docker compose plugin resources and tools',
  keywords: ['how-to-install-docker-compose-plugin'],
  category: 'How-To Guides',
  component: () => import('./how-to-install-docker-compose-plugin.vue'),
  icon: Book,
};

