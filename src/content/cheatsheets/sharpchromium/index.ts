import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sharpchromium',
  title: 'Sharpchromium',
  description: 'A collection of sharpchromium resources and tools',
  keywords: ['sharpchromium'],
  category: 'Windows AD Attacks',
  component: () => import('./sharpchromium.vue'),
  icon: FileText,
};

