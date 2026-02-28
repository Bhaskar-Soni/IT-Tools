import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'cron-special-strings-reference',
  title: 'Cron Special Strings Reference',
  description: 'A collection of cron special strings reference resources and tools',
  keywords: ['cron-special-strings-reference'],
  category: 'Uncategorized',
  component: () => import('./cron-special-strings-reference.vue'),
  icon: FileText,
};

