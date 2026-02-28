import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'teamfiltration',
  title: 'Teamfiltration',
  description: 'A collection of teamfiltration resources and tools',
  keywords: ['teamfiltration'],
  category: 'Cloud Commands',
  component: () => import('./teamfiltration.vue'),
  icon: Terminal,
};


