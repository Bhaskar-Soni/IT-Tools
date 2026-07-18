import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'security-related-logs',
  title: 'Security Related Logs',
  description: 'A collection of security related logs resources and tools',
  keywords: ['security-related-logs'],
  category: 'Linux Commands',
  component: () => import('./security-related-logs.vue'),
  icon: Terminal,
};

