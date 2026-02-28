import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'haproxy',
  title: 'Haproxy',
  description: 'A collection of haproxy resources and tools',
  keywords: ['haproxy'],
  category: 'Configurations',
  component: () => import('./haproxy.vue'),
  icon: FileText,
};

