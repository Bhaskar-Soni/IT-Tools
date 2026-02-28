import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'certipy',
  title: 'Certipy',
  description: 'A collection of certipy resources and tools',
  keywords: ['certipy'],
  category: 'Hunting Commands',
  component: () => import('./certipy.vue'),
  icon: Terminal,
};


