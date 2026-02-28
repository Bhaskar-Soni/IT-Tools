import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'amass',
  title: 'Amass',
  description: 'A collection of amass resources and tools',
  keywords: ['amass'],
  category: 'Tool Commands',
  component: () => import('./amass.vue'),
  icon: Terminal,
};

