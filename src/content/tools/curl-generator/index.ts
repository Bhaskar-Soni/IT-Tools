import { Download } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'curl-generator',
  title: 'Curl Command Generator',
  description: 'Generate CURL command lines',
  keywords: ['curl'],
  component: () => import('./curl-generator.vue'),
  icon: Download,
  category: 'Network',
};
