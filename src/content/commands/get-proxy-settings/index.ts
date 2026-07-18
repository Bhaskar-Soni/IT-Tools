import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-proxy-settings',
  title: 'Get Proxy Settings',
  description: 'A collection of get proxy settings resources and tools',
  keywords: ['get-proxy-settings'],
  category: 'Windows Commands',
  component: () => import('./get-proxy-settings.vue'),
  icon: Terminal,
};

