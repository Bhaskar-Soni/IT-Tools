import { TextWrapDisabled } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'unicode-to-java-entities',
  title: 'Unicode to Java Entities',
  description: 'Convert unicode characters to Java entities and vice versa',
  keywords: ['java-entities','to','unicode','text'],
  component: () => import('./unicode-characters-to-java-entities.vue'),
  icon: TextWrapDisabled,
  category: 'Uncategorized',
};
