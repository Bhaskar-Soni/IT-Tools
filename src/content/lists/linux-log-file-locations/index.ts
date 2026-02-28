import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'linux-log-file-locations',
  title: 'Linux Log File Locations',
  description: 'A collection of linux log file locations resources and tools',
  keywords: ['linux-log-file-locations'],
  category: 'Uncategorized',
  component: () => import('./linux-log-file-locations.vue'),
  icon: FileText,
};

