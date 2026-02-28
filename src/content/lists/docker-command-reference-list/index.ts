import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'docker-command-reference-list',
  title: 'Docker Command Reference List',
  description: 'A collection of docker command reference list resources and tools',
  keywords: ['docker-command-reference-list'],
  category: 'Uncategorized',
  component: () => import('./docker-command-reference-list.vue'),
  icon: FileText,
};

