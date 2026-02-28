import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'git-commit-types-reference',
  title: 'Git Commit Types Reference',
  description: 'A collection of git commit types reference resources and tools',
  keywords: ['git-commit-types-reference'],
  category: 'Uncategorized',
  component: () => import('./git-commit-types-reference.vue'),
  icon: FileText,
};

