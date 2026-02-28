import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'documentation-quality-report',
  title: 'Documentation Quality Report',
  description: 'A collection of documentation quality report resources and tools',
  keywords: ['documentation-quality-report'],
  category: 'Engineering',
  component: () => import('./documentation-quality-report.vue'),
  icon: FileText,
};

