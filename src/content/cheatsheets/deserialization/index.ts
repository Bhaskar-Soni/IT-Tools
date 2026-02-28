import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'deserialization',
  title: 'Deserialization',
  description: 'A collection of deserialization resources and tools',
  keywords: ['deserialization'],
  category: 'WebApp Injections',
  component: () => import('./deserialization.vue'),
  icon: FileText,
};

