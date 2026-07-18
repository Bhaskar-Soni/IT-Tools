import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'new-gplink',
  title: 'New Gplink',
  description: 'A collection of new gplink resources and tools',
  keywords: ['new-gplink'],
  category: 'Windows Commands',
  component: () => import('./new-gplink.vue'),
  icon: Terminal,
};

