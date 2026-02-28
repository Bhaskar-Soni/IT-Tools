import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rundll32',
  title: 'Rundll32',
  description: 'A collection of rundll32 resources and tools',
  keywords: ['rundll32'],
  category: 'Windows Commands',
  component: () => import('./rundll32.vue'),
  icon: Terminal,
};

