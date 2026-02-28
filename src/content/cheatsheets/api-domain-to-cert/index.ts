import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-domain-to-cert',
  title: 'API Domain To Cert',
  description: 'A collection of api domain to cert resources and tools',
  keywords: ['api-domain-to-cert'],
  category: 'API',
  component: () => import('./api-domain-to-cert.vue'),
  icon: FileText,
};


