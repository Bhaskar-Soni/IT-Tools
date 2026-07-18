import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'msi',
  title: 'Msi',
  description: 'A collection of msi resources and tools',
  keywords: ['msi'],
  category: 'Windows Commands',
  component: () => import('./msi.vue'),
  icon: Terminal,
};

