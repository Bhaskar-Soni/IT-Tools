import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'packmypayload',
  title: 'Packmypayload',
  description: 'A collection of packmypayload resources and tools',
  keywords: ['packmypayload'],
  category: 'Linux Commands',
  component: () => import('./packmypayload.vue'),
  icon: Terminal,
};

