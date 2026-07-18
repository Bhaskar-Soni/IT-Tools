import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mount-android',
  title: 'Mount Android',
  description: 'A collection of mount android resources and tools',
  keywords: ['mount-android'],
  category: 'Linux Commands',
  component: () => import('./mount-android.vue'),
  icon: Terminal,
};

