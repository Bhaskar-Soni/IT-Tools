import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powergpoabuse',
  title: 'Powergpoabuse',
  description: 'A collection of powergpoabuse resources and tools',
  keywords: ['powergpoabuse'],
  category: 'Tool Commands',
  component: () => import('./powergpoabuse.vue'),
  icon: Terminal,
};

