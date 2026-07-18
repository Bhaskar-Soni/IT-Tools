import { Terminal2 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'cli-command-editor',
  title: 'Cli command editor',
  description: 'Convert CLI commands with options into an easily editable form and generate the command with',
  keywords: ['cli','command','editor'],
  component: () => import('./cli-command-editor.vue'),
  icon: Terminal2,
  category: 'Development',
};
