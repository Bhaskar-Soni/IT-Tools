import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'mark-of-the-web',
  title: 'Mark Of The Web',
  description: 'A collection of mark of the web resources and tools',
  keywords: ['mark-of-the-web'],
  category: 'Security Concepts',
  component: () => import('./mark-of-the-web.vue'),
  icon: FileText,
};

