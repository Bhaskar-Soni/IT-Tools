import { License } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'software-licence-compatibility',
  title: 'Software licence compatibility',
  description: 'Software Licence compatibility checker and information',
  keywords: ['software','licence','compatibility'],
  component: () => import('./software-licence-compatibility.vue'),
  icon: License,
  category: 'Data',
};
