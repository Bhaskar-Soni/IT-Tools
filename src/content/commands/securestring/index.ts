import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'securestring',
  title: 'Securestring',
  description: 'A collection of securestring resources and tools',
  keywords: ['securestring'],
  category: 'Tool Commands',
  component: () => import('./securestring.vue'),
  icon: Terminal,
};

