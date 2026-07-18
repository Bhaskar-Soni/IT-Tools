import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'convert-cap-format',
  title: 'Convert Cap Format',
  description: 'A collection of convert cap format resources and tools',
  keywords: ['convert-cap-format'],
  category: 'Linux Commands',
  component: () => import('./convert-cap-format.vue'),
  icon: Terminal,
};

