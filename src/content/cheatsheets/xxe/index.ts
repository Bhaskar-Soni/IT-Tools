import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'xxe',
  title: 'Xxe',
  description: 'A collection of xxe resources and tools',
  keywords: ['xxe'],
  category: 'WebApp Injections',
  component: () => import('./xxe.vue'),
  icon: FileText,
};

