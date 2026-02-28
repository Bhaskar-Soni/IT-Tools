import { Sock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'websocket-tester',
  title: 'Websocket tester',
  description: 'Allows to test WebSocket connections',
  keywords: ['websocket','ws','tester'],
  component: () => import('./websocket-tester.vue'),
  icon: Sock,
  category: 'Network',
};
