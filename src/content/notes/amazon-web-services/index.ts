import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'amazon-web-services',
  title: 'Amazon Web Services',
  description: 'A collection of amazon web services resources and tools',
  keywords: ['amazon-web-services'],
  category: 'Cloud',
  component: () => import('./amazon-web-services.vue'),
  icon: FileText,
};

