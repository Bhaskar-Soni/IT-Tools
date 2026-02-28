import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'change-magic-bytes',
  title: 'Change Magic Bytes',
  description: 'A collection of change magic bytes resources and tools',
  keywords: ['change-magic-bytes'],
  category: 'MISC Commands',
  component: () => import('./change-magic-bytes.vue'),
  icon: Terminal,
};

