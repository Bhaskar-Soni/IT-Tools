import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'waybackurls',
  title: 'Waybackurls',
  description: 'A collection of waybackurls resources and tools',
  keywords: ['waybackurls'],
  category: 'Linux Commands',
  component: () => import('./waybackurls.vue'),
  icon: Terminal,
};

