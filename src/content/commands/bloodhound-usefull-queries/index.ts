import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bloodhound-usefull-queries',
  title: 'Bloodhound Usefull Queries',
  description: 'A collection of bloodhound usefull queries resources and tools',
  keywords: ['bloodhound-usefull-queries'],
  category: 'Hunting Commands',
  component: () => import('./bloodhound-usefull-queries.vue'),
  icon: Terminal,
};


