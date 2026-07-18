import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ffmpeg',
  title: 'Ffmpeg',
  description: 'A collection of ffmpeg resources and tools',
  keywords: ['ffmpeg'],
  category: 'Linux Commands',
  component: () => import('./ffmpeg.vue'),
  icon: Terminal,
};

