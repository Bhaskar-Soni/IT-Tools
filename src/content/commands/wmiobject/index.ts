import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wmiobject',
  title: 'Wmiobject',
  description: 'A collection of wmiobject resources and tools',
  keywords: ['wmiobject'],
  category: 'PowerShell Commands',
  component: () => import('./wmiobject.vue'),
  icon: Terminal,
};

