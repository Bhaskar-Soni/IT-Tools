import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sql-injection',
  title: 'Sql Injection',
  description: 'A collection of sql injection resources and tools',
  keywords: ['sql-injection'],
  category: 'WebApp Injections',
  component: () => import('./sql-injection.vue'),
  icon: FileText,
};

