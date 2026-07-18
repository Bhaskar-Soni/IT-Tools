import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gethostentry',
  title: 'Gethostentry',
  description: 'A collection of gethostentry resources and tools',
  keywords: ['gethostentry'],
  category: 'Network Commands',
  component: () => import('./gethostentry.vue'),
  icon: Terminal,
};

