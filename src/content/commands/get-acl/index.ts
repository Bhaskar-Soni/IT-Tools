import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-acl',
  title: 'Get Acl',
  description: 'A collection of get acl resources and tools',
  keywords: ['get-acl'],
  category: 'Windows Commands',
  component: () => import('./get-acl.vue'),
  icon: Terminal,
};

