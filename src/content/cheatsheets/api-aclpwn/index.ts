import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'aclpwn',
  title: 'API Aclpwn',
  description: 'A collection of aclpwn resources and tools',
  keywords: ['aclpwn'],
  category: 'API',
  component: () => import('./api-aclpwn.vue'),
  icon: FileText,
};

