import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'ssh-share',
  title: 'Ssh Share',
  description: 'A collection of ssh share resources and tools',
  keywords: ['ssh-share'],
  category: 'OS System',
  component: () => import('./ssh-share.vue'),
  icon: FileText,
};

