import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-childitem',
  title: 'Get Childitem',
  description: 'A collection of get childitem resources and tools',
  keywords: ['get-childitem'],
  category: 'Windows Commands',
  component: () => import('./get-childitem.vue'),
  icon: Terminal,
};

