import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'semantic-versioning-reference',
  title: 'Semantic Versioning Reference',
  description: 'A collection of semantic versioning reference resources and tools',
  keywords: ['semantic-versioning-reference'],
  category: 'Development',
  component: () => import('./semantic-versioning-reference.vue'),
  icon: FileText,
};

