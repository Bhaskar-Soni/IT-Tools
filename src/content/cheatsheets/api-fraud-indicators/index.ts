import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-fraud-indicators',
  title: 'API Fraud Indicators',
  description: 'A collection of api fraud indicators resources and tools',
  keywords: ['api-fraud-indicators'],
  category: 'API',
  component: () => import('./api-fraud-indicators.vue'),
  icon: FileText,
};


