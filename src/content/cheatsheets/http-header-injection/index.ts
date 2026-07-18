import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'http-header-injection',
  title: 'Http Header Injection',
  description: 'A collection of http header injection resources and tools',
  keywords: ['http-header-injection'],
  category: 'WebApp Injections',
  component: () => import('./http-header-injection.vue'),
  icon: FileText,
};

