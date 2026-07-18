import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'php-shell-command',
  title: 'Php Shell Command',
  description: 'A collection of php shell command resources and tools',
  keywords: ['php-shell-command'],
  category: 'WebApp Injections',
  component: () => import('./php-shell-command.vue'),
  icon: FileText,
};

