import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tmux',
  title: 'Tmux',
  description: 'A collection of tmux resources and tools',
  keywords: ['tmux'],
  category: 'Linux Commands',
  component: () => import('./tmux.vue'),
  icon: Terminal,
};

