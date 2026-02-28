import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sccmhunter',
  title: 'Sccmhunter',
  description: 'A collection of sccmhunter resources and tools',
  keywords: ['sccmhunter'],
  category: 'Hunting Commands',
  component: () => import('./sccmhunter.vue'),
  icon: Terminal,
};


