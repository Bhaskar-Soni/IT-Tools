import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powershellicmp',
  title: 'Powershellicmp',
  description: 'A collection of powershellicmp resources and tools',
  keywords: ['powershellicmp'],
  category: 'Tool Commands',
  component: () => import('./powershellicmp.vue'),
  icon: Terminal,
};

