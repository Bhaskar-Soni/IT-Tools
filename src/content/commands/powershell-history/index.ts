import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-history',
  title: 'Powershell History',
  description: 'A collection of powershell history resources and tools',
  keywords: ['powershell-history'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-history.vue'),
  icon: Terminal,
};

