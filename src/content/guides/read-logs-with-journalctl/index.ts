import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'read-logs-with-journalctl',
  title: 'Read Logs With Journalctl',
  description: 'A collection of read logs with journalctl resources and tools',
  keywords: ['read-logs-with-journalctl'],
  category: 'Beginner Guides',
  component: () => import('./read-logs-with-journalctl.vue'),
  icon: Book,
};

