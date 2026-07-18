import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'http-request-smuggling',
  title: 'Http Request Smuggling',
  description: 'A collection of http request smuggling resources and tools',
  keywords: ['http-request-smuggling'],
  category: 'WebApp Injections',
  component: () => import('./http-request-smuggling.vue'),
  icon: FileText,
};

