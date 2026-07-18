import { Id } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'snowflake-id-extractor',
  title: 'Snowflake ID extractor',
  description: 'Extract timestamp, machine ID, and sequence number from a Snowflake ID',
  keywords: ['snowflake','id','extractor'],
  component: () => import('./snowflake-id-extractor.vue'),
  icon: Id,
  category: 'Forensic',
};
