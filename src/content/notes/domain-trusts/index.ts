import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'domain-trusts',
  title: 'Domain Trusts',
  description: 'A collection of domain trusts resources and tools',
  keywords: ['domain-trusts'],
  category: 'Identity & AD',
  component: () => import('./domain-trusts.vue'),
  icon: FileText,
};

