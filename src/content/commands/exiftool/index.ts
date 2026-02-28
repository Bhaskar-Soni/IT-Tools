import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'exiftool',
  title: 'Exiftool',
  description: 'A collection of exiftool resources and tools',
  keywords: ['exiftool'],
  category: 'Tool Commands',
  component: () => import('./exiftool.vue'),
  icon: Terminal,
};

