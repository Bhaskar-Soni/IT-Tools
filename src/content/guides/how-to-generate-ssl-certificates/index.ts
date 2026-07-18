import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-generate-ssl-certificates',
  title: 'How To Generate Ssl Certificates',
  description: 'A collection of how to generate ssl certificates resources and tools',
  keywords: ['how-to-generate-ssl-certificates'],
  category: 'How-To Guides',
  component: () => import('./how-to-generate-ssl-certificates.vue'),
  icon: Book,
};

