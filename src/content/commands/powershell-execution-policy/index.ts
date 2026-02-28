import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-execution-policy',
  title: 'Powershell Execution Policy',
  description: 'A collection of powershell execution policy resources and tools',
  keywords: ['powershell-execution-policy'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-execution-policy.vue'),
  icon: Terminal,
};

