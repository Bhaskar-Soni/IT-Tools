import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'screenshot',
  title: 'Screenshot',
  description: 'A collection of screenshot resources and tools',
  keywords: ['screenshot'],
  category: 'Linux Commands',
  component: () => import('./screenshot.vue'),
  icon: Terminal,
};

