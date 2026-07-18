import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'localectl',
  title: 'Localectl',
  description: 'A collection of localectl resources and tools',
  keywords: ['localectl'],
  category: 'Linux Commands',
  component: () => import('./localectl.vue'),
  icon: Terminal,
};

