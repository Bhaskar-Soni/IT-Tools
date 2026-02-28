import { GitCommit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'git-commit-semantic',
  title: 'Git Semantic Commit Cheatsheet',
  description: 'Semantic commit message format reference',
  keywords: ['git', 'commit', 'semantic', 'versioning'],
  category: 'DevOps',
  component: () => import('./git-commit-semantic.vue'),
  icon: GitCommit,
};


