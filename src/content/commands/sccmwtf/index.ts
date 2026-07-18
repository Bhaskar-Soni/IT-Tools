import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sccmwtf',
  title: 'Sccmwtf',
  description: 'A collection of sccmwtf resources and tools',
  keywords: ['sccmwtf'],
  category: 'Hunting Commands',
  component: () => import('./sccmwtf.vue'),
  icon: Terminal,
};


