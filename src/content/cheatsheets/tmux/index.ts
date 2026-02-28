import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'tmux',
  title: 'Tmux Cheatsheet',
  description: 'Tmux terminal multiplexer commands and bindings reference',
  keywords: ['tmux', 'terminal', 'multiplexer', 'sessions'],
  category: 'Tools',
  component: () => import('./tmux.vue'),
  icon: Terminal,
};


