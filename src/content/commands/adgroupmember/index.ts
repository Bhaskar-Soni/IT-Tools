import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'adgroupmember',
  title: 'Adgroupmember',
  description: 'A collection of adgroupmember resources and tools',
  keywords: ['adgroupmember'],
  category: 'Tool Commands',
  component: () => import('./adgroupmember.vue'),
  icon: Terminal,
};

