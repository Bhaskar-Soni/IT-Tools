import { GitBranch } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'git',
  title: 'Git Cheatsheet',
  description: 'Essential Git commands and workflows reference',
  keywords: ['git', 'version control', 'scm', 'commands'],
  category: 'API',
  component: () => import('./git.vue'),
  icon: GitBranch,
};


