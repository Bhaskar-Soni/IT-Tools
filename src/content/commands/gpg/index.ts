import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gpg',
  title: 'Gpg',
  description: 'A collection of gpg resources and tools',
  keywords: ['gpg'],
  category: 'Linux Commands',
  component: () => import('./gpg.vue'),
  icon: Terminal,
};

