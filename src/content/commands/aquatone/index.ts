import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'aquatone',
  title: 'Aquatone',
  description: 'A collection of aquatone resources and tools',
  keywords: ['aquatone'],
  category: 'Tool Commands',
  component: () => import('./aquatone.vue'),
  icon: Terminal,
};

