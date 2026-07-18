import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'yara',
  title: 'Yara',
  description: 'A collection of yara resources and tools',
  keywords: ['yara'],
  category: 'Forensic Commands',
  component: () => import('./yara.vue'),
  icon: Terminal,
};


