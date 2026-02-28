import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-download',
  title: 'Powershell Download',
  description: 'A collection of powershell download resources and tools',
  keywords: ['powershell-download'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-download.vue'),
  icon: Terminal,
};

