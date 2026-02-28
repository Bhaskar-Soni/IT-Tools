import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mac-os-x-app',
  title: 'Mac Os X App',
  description: 'A collection of mac os x app resources and tools',
  keywords: ['mac-os-x-app'],
  category: 'OS System',
  component: () => import('./mac-os-x-app.vue'),
  icon: FileText,
};

