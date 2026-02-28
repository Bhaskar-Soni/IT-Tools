import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ike-scan',
  title: 'Ike Scan',
  description: 'A collection of ike scan resources and tools',
  keywords: ['ike-scan'],
  category: 'Tool Commands',
  component: () => import('./ike-scan.vue'),
  icon: Terminal,
};

