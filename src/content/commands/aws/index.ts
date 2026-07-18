import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'aws',
  title: 'Aws',
  description: 'A collection of aws resources and tools',
  keywords: ['aws'],
  category: 'Cloud Commands',
  component: () => import('./aws.vue'),
  icon: Terminal,
};

