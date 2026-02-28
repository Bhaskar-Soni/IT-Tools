import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mimikatz',
  title: 'Mimikatz',
  description: 'A collection of mimikatz resources and tools',
  keywords: ['mimikatz'],
  category: 'Windows AD Attacks',
  component: () => import('./mimikatz.vue'),
  icon: FileText,
};

