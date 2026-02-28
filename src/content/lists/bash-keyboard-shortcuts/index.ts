import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'bash-keyboard-shortcuts',
  title: 'Bash Keyboard Shortcuts',
  description: 'A collection of bash keyboard shortcuts resources and tools',
  keywords: ['bash-keyboard-shortcuts'],
  category: 'Terminal',
  component: () => import('./bash-keyboard-shortcuts.vue'),
  icon: FileText,
};

