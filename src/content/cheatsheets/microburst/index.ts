import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'microburst',
  title: 'Microburst',
  description: 'A collection of microburst resources and tools',
  keywords: ['microburst'],
  category: 'Cloud Identity',
  component: () => import('./microburst.vue'),
  icon: FileText,
};

