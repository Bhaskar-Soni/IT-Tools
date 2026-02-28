import { Eyeglass } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'tcpdump-generator',
  title: 'TCPDump Generator',
  description: 'Generate tcpdump command line',
  keywords: ['tcpdump','generator'],
  component: () => import('./tcpdump-generator.vue'),
  icon: Eyeglass,
  category: 'Forensic',
};
