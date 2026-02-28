import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-grayhatwarfare',
  title: 'API Grayhatwarfare',
  description: 'A collection of api grayhatwarfare resources and tools',
  keywords: ['api-grayhatwarfare'],
  category: 'API',
  component: () => import('./api-grayhatwarfare.vue'),
  icon: FileText,
};


