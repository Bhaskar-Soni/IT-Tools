import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'anti-virus',
  title: 'Anti Virus',
  description: 'A collection of anti virus resources and tools',
  keywords: ['anti-virus'],
  category: 'Security Concepts',
  component: () => import('./anti-virus.vue'),
  icon: FileText,
};

