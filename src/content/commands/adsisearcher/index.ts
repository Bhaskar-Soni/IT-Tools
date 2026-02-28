import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'adsisearcher',
  title: 'Adsisearcher',
  description: 'A collection of adsisearcher resources and tools',
  keywords: ['adsisearcher'],
  category: 'Tool Commands',
  component: () => import('./adsisearcher.vue'),
  icon: Terminal,
};

