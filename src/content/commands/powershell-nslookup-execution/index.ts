import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-nslookup-execution',
  title: 'Powershell Nslookup Execution',
  description: 'A collection of powershell nslookup execution resources and tools',
  keywords: ['powershell-nslookup-execution'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-nslookup-execution.vue'),
  icon: Terminal,
};

