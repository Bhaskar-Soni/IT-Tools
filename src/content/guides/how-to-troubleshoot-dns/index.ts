import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-troubleshoot-dns',
  title: 'How To Troubleshoot Dns',
  description: 'A collection of how to troubleshoot dns resources and tools',
  keywords: ['how-to-troubleshoot-dns'],
  category: 'How-To Guides',
  component: () => import('./how-to-troubleshoot-dns.vue'),
  icon: Book,
};

