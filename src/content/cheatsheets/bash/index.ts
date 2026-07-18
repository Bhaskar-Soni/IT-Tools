import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'bash',
  title: 'Bash Cheatsheet',
  description: 'Quick reference for Bash shell commands and scripting',
  keywords: ['bash', 'shell', 'scripting', 'commands'],
  category: 'Commands',
  component: () => import('./bash.vue'),
  icon: Terminal,
};

