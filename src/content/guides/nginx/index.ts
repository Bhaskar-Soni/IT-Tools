import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'nginx',
  title: 'Nginx',
  description: 'A collection of nginx resources and tools',
  keywords: ['nginx'],
  category: 'Configurations',
  component: () => import('./nginx.vue'),
  icon: FileText,
};

