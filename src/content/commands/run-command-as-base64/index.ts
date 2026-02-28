import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'run-command-as-base64',
  title: 'Run Command As Base64',
  description: 'A collection of run command as base64 resources and tools',
  keywords: ['run-command-as-base64'],
  category: 'Windows Commands',
  component: () => import('./run-command-as-base64.vue'),
  icon: Terminal,
};

