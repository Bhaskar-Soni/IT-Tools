import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'cmd-environment-variables',
  title: 'Cmd Environment Variables',
  description: 'A collection of cmd environment variables resources and tools',
  keywords: ['cmd-environment-variables'],
  category: 'Windows Commands',
  component: () => import('./cmd-environment-variables.vue'),
  icon: Terminal,
};

