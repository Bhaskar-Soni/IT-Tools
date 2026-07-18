import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'regex-character-classes-reference',
  title: 'Regex Character Classes Reference',
  description: 'A collection of regex character classes reference resources and tools',
  keywords: ['regex-character-classes-reference'],
  category: 'Uncategorized',
  component: () => import('./regex-character-classes-reference.vue'),
  icon: FileText,
};

