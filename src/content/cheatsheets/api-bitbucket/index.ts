import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-bitbucket',
  title: 'API Bitbucket',
  description: 'A collection of api bitbucket resources and tools',
  keywords: ['api-bitbucket'],
  category: 'API',
  component: () => import('./api-bitbucket.vue'),
  icon: FileText,
};


