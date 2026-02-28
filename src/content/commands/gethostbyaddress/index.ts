import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gethostbyaddress',
  title: 'Gethostbyaddress',
  description: 'A collection of gethostbyaddress resources and tools',
  keywords: ['gethostbyaddress'],
  category: 'Network Commands',
  component: () => import('./gethostbyaddress.vue'),
  icon: Terminal,
};

