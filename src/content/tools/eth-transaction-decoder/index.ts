import { ReportMoney } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'eth-transaction-decoder',
  title: 'ETH Transaction Decoder',
  description: 'Ethereum transaction decoder with Smart Contract ABI',
  keywords: ['eth','ethereum','transaction','decoder'],
  component: () => import('./eth-transaction-decoder.vue'),
  icon: ReportMoney,
  category: 'Forensic',
};
