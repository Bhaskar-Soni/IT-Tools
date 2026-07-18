import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'smbexec',
  title: 'Smbexec',
  description: 'A collection of smbexec resources and tools',
  keywords: ['smbexec'],
  category: 'Windows AD Attacks',
  component: () => import('./smbexec.vue'),
  icon: FileText,
};

