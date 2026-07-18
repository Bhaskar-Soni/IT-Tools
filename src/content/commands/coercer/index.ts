import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'coercer',
  title: 'Coercer',
  description: 'A collection of coercer resources and tools',
  keywords: ['coercer'],
  category: 'Hunting Commands',
  component: () => import('./coercer.vue'),
  icon: Terminal,
};


