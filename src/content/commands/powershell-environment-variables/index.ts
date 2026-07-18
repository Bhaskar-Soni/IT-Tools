import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-environment-variables',
  title: 'Powershell Environment Variables',
  description: 'A collection of powershell environment variables resources and tools',
  keywords: ['powershell-environment-variables'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-environment-variables.vue'),
  icon: Terminal,
};

