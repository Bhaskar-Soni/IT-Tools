import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'cover-tracks-in-shell-history',
  title: 'Cover Tracks In Shell History',
  description: 'A collection of cover tracks in shell history resources and tools',
  keywords: ['cover-tracks-in-shell-history'],
  category: 'Linux Commands',
  component: () => import('./cover-tracks-in-shell-history.vue'),
  icon: Terminal,
};

