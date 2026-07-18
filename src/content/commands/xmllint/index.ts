import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'xmllint',
  title: 'Xmllint',
  description: 'A collection of xmllint resources and tools',
  keywords: ['xmllint'],
  category: 'Linux Commands',
  component: () => import('./xmllint.vue'),
  icon: Terminal,
};

