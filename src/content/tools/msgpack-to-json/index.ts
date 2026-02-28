import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'msgpack-to-json',
  title: 'Message Pack to JSON',
  description: 'Convert MessagePack file to JSON',
  keywords: ['msgpack','message','pack','json'],
  component: () => import('./msgpack-to-json.vue'),
  icon: Binary,
  category: 'JSON',
};
