import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-ransomware',
  title: 'API Ransomware',
  description: 'A collection of api ransomware resources and tools',
  keywords: ['api-ransomware'],
  category: 'API',
  component: () => import('./api-ransomware.vue'),
  icon: FileText,
};


