import { Parking } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'parquets-reader',
  title: 'Parquet files Reader',
  description: 'Read parquet file as JSON object arrays',
  keywords: ['parquet','reader'],
  component: () => import('./parquets-reader.vue'),
  icon: Parking,
  category: 'Forensic',
};
