import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'droopescan',
  title: 'Droopescan',
  description: 'A collection of droopescan resources and tools',
  keywords: ['droopescan'],
  category: 'Tool Commands',
  component: () => import('./droopescan.vue'),
  icon: Terminal,
};

