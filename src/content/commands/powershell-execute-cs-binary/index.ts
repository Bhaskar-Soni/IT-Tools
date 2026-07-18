import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-execute-cs-binary',
  title: 'Powershell Execute Cs Binary',
  description: 'A collection of powershell execute cs binary resources and tools',
  keywords: ['powershell-execute-cs-binary'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-execute-cs-binary.vue'),
  icon: Terminal,
};

