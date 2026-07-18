import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'git-essentials',
  title: 'Git Essentials',
  description: 'A collection of git essentials resources and tools',
  keywords: ['git-essentials'],
  category: 'Configurations',
  component: () => import('./git-essentials.vue'),
  icon: Book,
};

