import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-s3-bucket',
  title: 'API S3 Bucket',
  description: 'A collection of api s3 bucket resources and tools',
  keywords: ['api-s3-bucket'],
  category: 'API',
  component: () => import('./api-s3-bucket.vue'),
  icon: FileText,
};

