import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'psexec',
  title: 'Psexec',
  description: 'A collection of psexec resources and tools',
  keywords: ['psexec'],
  category: 'Windows AD Attacks',
  component: () => import('./psexec.vue'),
  icon: FileText,
};

