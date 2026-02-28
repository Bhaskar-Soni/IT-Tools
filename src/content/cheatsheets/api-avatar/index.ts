import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-avatar',
  title: 'API Avatar',
  description: 'A collection of api avatar resources and tools',
  keywords: ['api-avatar'],
  category: 'API',
  component: () => import('./api-avatar.vue'),
  icon: FileText,
};

