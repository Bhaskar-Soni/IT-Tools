import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wcvs',
  title: 'Wcvs',
  description: 'A collection of wcvs resources and tools',
  keywords: ['wcvs'],
  category: 'Linux Commands',
  component: () => import('./wcvs.vue'),
  icon: Terminal,
};

