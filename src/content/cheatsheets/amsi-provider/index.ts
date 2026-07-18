import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'amsi-provider',
  title: 'Amsi Provider',
  description: 'A collection of amsi provider resources and tools',
  keywords: ['amsi-provider'],
  category: 'Windows Defense',
  component: () => import('./amsi-provider.vue'),
  icon: FileText,
};

