import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'microsoft-entra-id-fundamentals',
  title: 'Microsoft Entra Id Fundamentals',
  description: 'A collection of microsoft entra id fundamentals resources and tools',
  keywords: ['microsoft-entra-id-fundamentals'],
  category: 'Cloud',
  component: () => import('./microsoft-entra-id-fundamentals.vue'),
  icon: FileText,
};

