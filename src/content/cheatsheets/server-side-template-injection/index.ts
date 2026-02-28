import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'server-side-template-injection',
  title: 'Server Side Template Injection',
  description: 'A collection of server side template injection resources and tools',
  keywords: ['server-side-template-injection'],
  category: 'WebApp Injections',
  component: () => import('./server-side-template-injection.vue'),
  icon: FileText,
};

