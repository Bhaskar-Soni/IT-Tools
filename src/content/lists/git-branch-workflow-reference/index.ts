import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'git-branch-workflow-reference',
  title: 'Git Branch Workflow Reference',
  description: 'A collection of git branch workflow reference resources and tools',
  keywords: ['git-branch-workflow-reference'],
  category: 'Development',
  component: () => import('./git-branch-workflow-reference.vue'),
  icon: FileText,
};

