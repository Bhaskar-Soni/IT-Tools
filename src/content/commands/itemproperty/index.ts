import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'itemproperty',
  title: 'Itemproperty',
  description: 'A collection of itemproperty resources and tools',
  keywords: ['itemproperty'],
  category: 'PowerShell Commands',
  component: () => import('./itemproperty.vue'),
  icon: Terminal,
};

