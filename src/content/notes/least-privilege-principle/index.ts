import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'least-privilege-principle',
  title: 'Least Privilege Principle',
  description: 'A collection of least privilege principle resources and tools',
  keywords: ['least-privilege-principle'],
  category: 'Security Concepts',
  component: () => import('./least-privilege-principle.vue'),
  icon: FileText,
};

