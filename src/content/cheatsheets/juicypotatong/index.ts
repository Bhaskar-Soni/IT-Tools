import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'juicypotatong',
  title: 'Juicypotatong',
  description: 'A collection of juicypotatong resources and tools',
  keywords: ['juicypotatong'],
  category: 'Windows AD Attacks',
  component: () => import('./juicypotatong.vue'),
  icon: FileText,
};

