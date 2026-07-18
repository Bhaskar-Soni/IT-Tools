import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'apache2',
  title: 'Apache2',
  description: 'A collection of apache2 resources and tools',
  keywords: ['apache2'],
  category: 'Configurations',
  component: () => import('./apache2.vue'),
  icon: FileText,
};

