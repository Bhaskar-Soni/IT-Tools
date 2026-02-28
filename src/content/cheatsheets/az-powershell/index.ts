import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'az-powershell',
  title: 'Az Powershell',
  description: 'A collection of az powershell resources and tools',
  keywords: ['az-powershell'],
  category: 'Cloud Identity',
  component: () => import('./az-powershell.vue'),
  icon: FileText,
};

