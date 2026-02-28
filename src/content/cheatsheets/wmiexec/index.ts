import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'wmiexec',
  title: 'Wmiexec',
  description: 'A collection of wmiexec resources and tools',
  keywords: ['wmiexec'],
  category: 'Windows AD Attacks',
  component: () => import('./wmiexec.vue'),
  icon: FileText,
};

