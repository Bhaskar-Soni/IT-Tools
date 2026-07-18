import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershell-language-restrictions',
  title: 'Powershell Language Restrictions',
  description: 'A collection of powershell language restrictions resources and tools',
  keywords: ['powershell-language-restrictions'],
  category: 'PowerShell Commands',
  component: () => import('./powershell-language-restrictions.vue'),
  icon: Terminal,
};

