import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-backup-and-restore',
  title: 'How To Backup And Restore',
  description: 'A collection of how to backup and restore resources and tools',
  keywords: ['how-to-backup-and-restore'],
  category: 'How-To Guides',
  component: () => import('./how-to-backup-and-restore.vue'),
  icon: Book,
};

