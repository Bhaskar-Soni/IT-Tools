import { Terminal2 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'explainshell',
  title: 'Explain Shell',
  description: 'Match command-line arguments to their help text',
  keywords: ['explain','shell'],
  component: () => import('./explainshell.vue'),
  icon: Terminal2,
  category: 'Data',
};
