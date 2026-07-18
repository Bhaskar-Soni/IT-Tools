import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mongo-objectid-converter',
  title: 'MongoDB ObjectId Converter',
  description: 'Convert between MongoDB ObjectId and internal timestamp',
  keywords: ['mongo','objectid','converter','timestamp'],
  component: () => import('./mongo-objectid-converter.vue'),
  icon: Database,
  category: 'Forensic',
};
