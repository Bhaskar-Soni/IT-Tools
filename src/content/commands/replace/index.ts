import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'replace',
  title: 'Replace',
  description: 'A collection of replace resources and tools',
  keywords: ['replace'],
  category: 'Windows Commands',
  component: () => import('./replace.vue'),
  icon: Terminal,
};

