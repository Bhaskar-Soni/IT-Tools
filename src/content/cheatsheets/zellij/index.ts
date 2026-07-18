import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'zellij',
  title: 'Zellij Cheatsheet',
  description: 'Zellij terminal multiplexer commands and layout reference',
  keywords: ['zellij', 'terminal', 'multiplexer', 'layout'],
  category: 'Tools',
  component: () => import('./zellij.vue'),
  icon: Terminal,
};


