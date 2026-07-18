import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'infoga',
  title: 'Infoga',
  description: 'A collection of infoga resources and tools',
  keywords: ['infoga'],
  category: 'Linux Commands',
  component: () => import('./infoga.vue'),
  icon: Terminal,
};

