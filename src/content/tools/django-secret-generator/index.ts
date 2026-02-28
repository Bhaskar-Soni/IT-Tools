import { BrandPython } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'django-secret-generator',
  title: 'Django Secret Generator',
  description: 'Generate a Django secret key',
  keywords: ['django','secret','generator'],
  component: () => import('./django-secret-generator.vue'),
  icon: BrandPython,
  category: 'Development',
};
