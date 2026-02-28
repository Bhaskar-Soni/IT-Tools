import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-psdrive',
  title: 'Get Psdrive',
  description: 'A collection of get psdrive resources and tools',
  keywords: ['get-psdrive'],
  category: 'Windows Commands',
  component: () => import('./get-psdrive.vue'),
  icon: Terminal,
};

