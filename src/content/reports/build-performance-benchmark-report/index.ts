import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'build-performance-benchmark-report',
  title: 'Build Performance Benchmark Report',
  description: 'A collection of build performance benchmark report resources and tools',
  keywords: ['build-performance-benchmark-report'],
  category: 'Engineering',
  component: () => import('./build-performance-benchmark-report.vue'),
  icon: FileText,
};

