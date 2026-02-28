import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'patrolcli',
  title: 'Patrolcli',
  description: 'A collection of patrolcli resources and tools',
  keywords: ['patrolcli'],
  category: 'Tool Commands',
  component: () => import('./patrolcli.vue'),
  icon: Terminal,
};

