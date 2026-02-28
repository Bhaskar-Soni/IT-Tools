import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'eicar',
  title: 'Eicar',
  description: 'A collection of eicar resources and tools',
  keywords: ['eicar'],
  category: 'Malware AV',
  component: () => import('./eicar.vue'),
  icon: FileText,
};

