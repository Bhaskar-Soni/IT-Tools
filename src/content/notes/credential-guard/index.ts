import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'credential-guard',
  title: 'Credential Guard',
  description: 'A collection of credential guard resources and tools',
  keywords: ['credential-guard'],
  category: 'Identity & AD',
  component: () => import('./credential-guard.vue'),
  icon: FileText,
};

