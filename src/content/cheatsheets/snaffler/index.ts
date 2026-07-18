import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'snaffler',
  title: 'Snaffler',
  description: 'A collection of snaffler resources and tools',
  keywords: ['snaffler'],
  category: 'Windows AD Attacks',
  component: () => import('./snaffler.vue'),
  icon: FileText,
};

