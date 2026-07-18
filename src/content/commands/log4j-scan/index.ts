import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'log4j-scan',
  title: 'Log4j Scan',
  description: 'A collection of log4j scan resources and tools',
  keywords: ['log4j-scan'],
  category: 'Linux Commands',
  component: () => import('./log4j-scan.vue'),
  icon: Terminal,
};

