import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'device-code-phishing',
  title: 'Device Code Phishing',
  description: 'A collection of device code phishing resources and tools',
  keywords: ['device-code-phishing'],
  category: 'Security Concepts',
  component: () => import('./device-code-phishing.vue'),
  icon: FileText,
};

