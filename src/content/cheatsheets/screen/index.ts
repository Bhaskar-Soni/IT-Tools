import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'screen',
  title: 'GNU Screen Cheatsheet',
  description: 'GNU Screen terminal multiplexer commands reference',
  keywords: ['screen', 'terminal', 'multiplexer', 'commands'],
  category: 'Tools',
  component: () => import('./screen.vue'),
  icon: Terminal,
};


