import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powerhub',
  title: 'Powerhub',
  description: 'A collection of powerhub resources and tools',
  keywords: ['powerhub'],
  category: 'Linux Commands',
  component: () => import('./powerhub.vue'),
  icon: Terminal,
};

