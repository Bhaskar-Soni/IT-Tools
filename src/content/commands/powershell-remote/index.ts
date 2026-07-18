import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-remote',
  title: 'Powershell Remote',
  description: 'A collection of powershell remote resources and tools',
  keywords: ['powershell-remote'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-remote.vue'),
  icon: Terminal,
};

