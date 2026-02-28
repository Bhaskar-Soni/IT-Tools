import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'dangling-markup-injection',
  title: 'Dangling Markup Injection',
  description: 'A collection of dangling markup injection resources and tools',
  keywords: ['dangling-markup-injection'],
  category: 'WebApp Injections',
  component: () => import('./dangling-markup-injection.vue'),
  icon: FileText,
};

