import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smime',
  title: 'Smime',
  description: 'A collection of smime resources and tools',
  keywords: ['smime'],
  category: 'Linux Commands',
  component: () => import('./smime.vue'),
  icon: Terminal,
};

