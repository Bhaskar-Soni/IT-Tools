import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'ssl-certificate-expiry-checker',
  title: 'SSL Certificate Expiry Checker',
  description: 'Monitor certificate expiration windows across domains and alert before outages.',
  keywords: ['ssl', 'tls', 'certificate expiry', 'monitoring', 'openssl'],
  category: 'Monitoring',
  component: () => import('./ssl-certificate-expiry-checker.vue'),
  icon: Code,
};

