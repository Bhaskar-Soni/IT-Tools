import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-hackertarget',
  title: 'API Hackertarget',
  description: 'A collection of api hackertarget resources and tools',
  keywords: ['api-hackertarget'],
  category: 'API',
  component: () => import('./api-hackertarget.vue'),
  icon: FileText,
};


