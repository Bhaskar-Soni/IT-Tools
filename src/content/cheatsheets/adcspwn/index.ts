import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'adcspwn',
  title: 'Adcspwn',
  description: 'A collection of adcspwn resources and tools',
  keywords: ['adcspwn'],
  category: 'Windows AD Attacks',
  component: () => import('./adcspwn.vue'),
  icon: FileText,
};

