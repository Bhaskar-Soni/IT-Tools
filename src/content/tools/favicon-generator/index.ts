import { Photo } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'favicon-generator',
  title: 'Favicon Generator',
  description: 'Generate Favicon and corresponding header',
  keywords: ['favicon','generator'],
  component: () => import('./favicon-generator.vue'),
  icon: Photo,
  category: 'Development',
};
