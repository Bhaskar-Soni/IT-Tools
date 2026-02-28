import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'forfiles',
  title: 'Forfiles',
  description: 'A collection of forfiles resources and tools',
  keywords: ['forfiles'],
  category: 'Windows Commands',
  component: () => import('./forfiles.vue'),
  icon: Terminal,
};

