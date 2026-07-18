import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'feh',
  title: 'Feh',
  description: 'A collection of feh resources and tools',
  keywords: ['feh'],
  category: 'Linux Commands',
  component: () => import('./feh.vue'),
  icon: Terminal,
};

