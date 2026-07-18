import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'service',
  title: 'Service',
  description: 'A collection of service resources and tools',
  keywords: ['service'],
  category: 'Windows Commands',
  component: () => import('./service.vue'),
  icon: Terminal,
};

