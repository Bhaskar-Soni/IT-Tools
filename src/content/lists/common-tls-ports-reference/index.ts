import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'common-tls-ports-reference',
  title: 'Common Tls Ports Reference',
  description: 'A collection of common tls ports reference resources and tools',
  keywords: ['common-tls-ports-reference'],
  category: 'Networking',
  component: () => import('./common-tls-ports-reference.vue'),
  icon: FileText,
};

