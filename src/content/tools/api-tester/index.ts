import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'api-tester',
  title: 'API Tester',
  description: 'HTTP API Tester',
  keywords: ['api','http','call','tester'],
  component: () => import('./api-tester.vue'),
  icon: World,
  category: 'Development',
};
