import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'incident-response-lifecycle',
  title: 'Incident Response Lifecycle',
  description: 'A collection of incident response lifecycle resources and tools',
  keywords: ['incident-response-lifecycle'],
  category: 'Security Concepts',
  component: () => import('./incident-response-lifecycle.vue'),
  icon: FileText,
};

