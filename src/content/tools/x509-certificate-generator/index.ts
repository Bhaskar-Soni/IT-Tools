import { FileCertificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'x509-certificate-generator',
  title: 'X509 certificate generator',
  description: 'Generate a self signed SSL/x509 certificate',
  keywords: ['x509','ssl','tls','self-signed','certificate','generator'],
  component: () => import('./x509-certificate-generator.vue'),
  icon: FileCertificate,
  category: 'Crypto',
};
