import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'jira',
  title: 'Jira',
  description: 'A collection of jira resources and tools',
  keywords: ['jira'],
  category: 'CMS Platforms',
  component: () => import('./jira.vue'),
  icon: FileText,
};

