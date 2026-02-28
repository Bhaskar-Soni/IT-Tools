import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'configsecuritypolicy',
  title: 'Configsecuritypolicy',
  description: 'A collection of configsecuritypolicy resources and tools',
  keywords: ['configsecuritypolicy'],
  category: 'Tool Commands',
  component: () => import('./configsecuritypolicy.vue'),
  icon: Terminal,
};

