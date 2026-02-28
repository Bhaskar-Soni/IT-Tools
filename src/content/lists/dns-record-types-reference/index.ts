import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'dns-record-types-reference',
  title: 'Dns Record Types Reference',
  description: 'A collection of dns record types reference resources and tools',
  keywords: ['dns-record-types-reference'],
  category: 'Networking',
  component: () => import('./dns-record-types-reference.vue'),
  icon: FileText,
};

