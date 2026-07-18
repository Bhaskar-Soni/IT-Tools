import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bloodhound-py',
  title: 'Bloodhound Py',
  description: 'A collection of bloodhound py resources and tools',
  keywords: ['bloodhound-py'],
  category: 'Hunting Commands',
  component: () => import('./bloodhound-py.vue'),
  icon: Terminal,
};


