import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ldapsearch',
  title: 'Ldapsearch',
  description: 'A collection of ldapsearch resources and tools',
  keywords: ['ldapsearch'],
  category: 'Linux Commands',
  component: () => import('./ldapsearch.vue'),
  icon: Terminal,
};

