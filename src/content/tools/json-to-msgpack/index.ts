import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-msgpack',
  title: 'JSON to MessagePack',
  description: 'Convert JSON to MessagePack',
  keywords: ['json','message','pack','msgpack'],
  component: () => import('./json-to-msgpack.vue'),
  icon: Binary,
  category: 'JSON',
};
