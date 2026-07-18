import { DatabaseExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-protobuf',
  title: 'Json to Protobuf',
  description: 'Generate Protobuf declaration from JSON objects',
  keywords: ['json','protobuf'],
  component: () => import('./json-to-protobuf.vue'),
  icon: DatabaseExport,
  category: 'Development',
};
