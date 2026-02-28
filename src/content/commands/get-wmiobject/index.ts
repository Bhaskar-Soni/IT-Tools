import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-wmiobject',
  title: 'Get Wmiobject',
  description: 'A collection of get wmiobject resources and tools',
  keywords: ['get-wmiobject'],
  category: 'Windows Commands',
  component: () => import('./get-wmiobject.vue'),
  icon: Terminal,
};

