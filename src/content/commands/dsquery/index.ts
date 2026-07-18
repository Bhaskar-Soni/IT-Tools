import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dsquery',
  title: 'Dsquery',
  description: 'A collection of dsquery resources and tools',
  keywords: ['dsquery'],
  category: 'Tool Commands',
  component: () => import('./dsquery.vue'),
  icon: Terminal,
};

