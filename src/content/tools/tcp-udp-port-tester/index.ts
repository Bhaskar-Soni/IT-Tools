import { WorldUpload } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'tcp-udp-port-tester',
  title: 'TCP/UDP Port Tester',
  description: 'Test TCP/UDP port connectivity',
  keywords: ['tcp','udp','port','tester'],
  component: () => import('./tcp-udp-port-tester.vue'),
  icon: WorldUpload,
  category: 'Network',
};
