import { Mountain } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'swagger-ui-tester',
  title: 'Swagger UI tester',
  description: 'Test Swagger Manifest',
  keywords: ['swagger','manifest','tester'],
  component: () => import('./swagger-ui-tester.vue'),
  icon: Mountain,
  category: 'Development',
};
