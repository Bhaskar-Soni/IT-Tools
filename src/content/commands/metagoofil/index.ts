import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'metagoofil',
  title: 'Metagoofil',
  description: 'A collection of metagoofil resources and tools',
  keywords: ['metagoofil'],
  category: 'Linux Commands',
  component: () => import('./metagoofil.vue'),
  icon: Terminal,
};

