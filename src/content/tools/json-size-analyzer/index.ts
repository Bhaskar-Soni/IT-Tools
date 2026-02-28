import { FileAnalytics } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-size-analyzer',
  title: 'Json Size Analyzer',
  description: 'Measure JSON nodes relative weights',
  keywords: ['json','size','analyzer'],
  component: () => import('./json-size-analyzer.vue'),
  icon: FileAnalytics,
  category: 'JSON',
};
