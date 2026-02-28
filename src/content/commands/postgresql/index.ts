import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'postgresql',
  title: 'Postgresql',
  description: 'A collection of postgresql resources and tools',
  keywords: ['postgresql'],
  category: 'Linux Commands',
  component: () => import('./postgresql.vue'),
  icon: Terminal,
};

