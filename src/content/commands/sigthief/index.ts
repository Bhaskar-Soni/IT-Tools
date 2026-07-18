import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sigthief',
  title: 'Sigthief',
  description: 'A collection of sigthief resources and tools',
  keywords: ['sigthief'],
  category: 'Forensic Commands',
  component: () => import('./sigthief.vue'),
  icon: Terminal,
};


