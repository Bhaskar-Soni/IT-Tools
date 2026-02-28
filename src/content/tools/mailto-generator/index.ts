import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mailto-generator',
  title: 'Mailto Generator',
  description: 'Generate a mailto: link href',
  keywords: ['mailto','generator','link'],
  component: () => import('./mailto-generator.vue'),
  icon: Mail,
  category: 'Email',
};
