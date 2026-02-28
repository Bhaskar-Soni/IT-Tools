import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'wifi-rsn',
  title: 'Wifi Rsn',
  description: 'A collection of wifi rsn resources and tools',
  keywords: ['wifi-rsn'],
  category: 'OS System',
  component: () => import('./wifi-rsn.vue'),
  icon: FileText,
};

