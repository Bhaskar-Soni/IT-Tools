import { InfoCircle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'http-status-codes',
  title: 'HTTP status codes',
  description: 'The list of all HTTP status codes, their name, and their meaning.',
  keywords: ['http','status','codes'],
  component: () => import('./http-status-codes.vue'),
  icon: InfoCircle,
  category: 'Web',
};
