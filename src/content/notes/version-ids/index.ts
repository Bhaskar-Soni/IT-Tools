import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'version-ids',
  title: 'Version Ids',
  description: 'A collection of version ids resources and tools',
  keywords: ['version-ids'],
  category: 'Cloud',
  component: () => import('./version-ids.vue'),
  icon: FileText,
};

