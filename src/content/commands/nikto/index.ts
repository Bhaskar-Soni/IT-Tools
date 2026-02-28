import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nikto',
  title: 'Nikto',
  description: 'A collection of nikto resources and tools',
  keywords: ['nikto'],
  category: 'Tool Commands',
  component: () => import('./nikto.vue'),
  icon: Terminal,
};

