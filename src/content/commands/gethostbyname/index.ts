import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gethostbyname',
  title: 'Gethostbyname',
  description: 'A collection of gethostbyname resources and tools',
  keywords: ['gethostbyname'],
  category: 'Network Commands',
  component: () => import('./gethostbyname.vue'),
  icon: Terminal,
};

