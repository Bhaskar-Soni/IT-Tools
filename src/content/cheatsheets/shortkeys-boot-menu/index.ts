import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'shortkeys-boot-menu',
  title: 'Shortkeys Boot Menu',
  description: 'A collection of shortkeys boot menu resources and tools',
  keywords: ['shortkeys-boot-menu'],
  category: 'OS System',
  component: () => import('./shortkeys-boot-menu.vue'),
  icon: FileText,
};

