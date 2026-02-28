import { FileExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'logrotate-generator',
  title: 'Apache LogRotate Generator',
  description: 'Generate Apache .log rotation configuration',
  keywords: ['logrotate','apache','generator'],
  component: () => import('./logrotate-generator.vue'),
  icon: FileExport,
  category: 'Network',
};
