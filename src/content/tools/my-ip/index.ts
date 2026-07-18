import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'my-ip',
  title: 'My IP Address',
  description: 'Get your client IP Address (IPv4/6) using https://www.ipify.org/',
  keywords: ['my','client','ip'],
  component: () => import('./my-ip.vue'),
  icon: World,
  category: 'Network',
};
