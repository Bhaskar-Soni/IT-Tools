import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mirrordump',
  title: 'Mirrordump',
  description: 'A collection of mirrordump resources and tools',
  keywords: ['mirrordump'],
  category: 'Tool Commands',
  component: () => import('./mirrordump.vue'),
  icon: Terminal,
};

