import { TransferIn } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'data-transfer-rate-converter',
  title: 'Data Transfer Rate Calculator',
  description: 'Compute Data Transfer times, rates and amount of data',
  keywords: ['data','transfer','rate','convert','time','units'],
  component: () => import('./data-transfer-rate-converter.vue'),
  icon: TransferIn,
  category: 'Network',
};
