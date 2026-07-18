import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'arpa-decoder',
  title: 'ARPA Decoder',
  description: 'Decode IPv4/6 ARPA addresses or PTR record',
  keywords: ['arpa','ptr','ip','dns','decoder'],
  component: () => import('./arpa-decoder.vue'),
  icon: World,
  category: 'Network',
};
