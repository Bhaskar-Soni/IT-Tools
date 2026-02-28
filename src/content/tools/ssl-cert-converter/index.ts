import { ShieldChevron } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ssl-cert-converter',
  title: 'SSL Certificate converter',
  description: 'Convert SSL Certificate from different formats',
  keywords: ['ssl','certificate','crt','pkcs','p12','pem','der','jks','converter'],
  component: () => import('./ssl-cert-converter.vue'),
  icon: ShieldChevron,
  category: 'Crypto',
};
