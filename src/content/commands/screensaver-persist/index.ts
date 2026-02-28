import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'screensaver-persist',
  title: 'Screensaver Persist',
  description: 'A collection of screensaver persist resources and tools',
  keywords: ['screensaver-persist'],
  category: 'Tool Commands',
  component: () => import('./screensaver-persist.vue'),
  icon: Terminal,
};

