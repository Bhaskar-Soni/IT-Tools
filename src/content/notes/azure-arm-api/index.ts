import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'azure-arm-api',
  title: 'Azure Arm Api',
  description: 'A collection of azure arm api resources and tools',
  keywords: ['azure-arm-api'],
  category: 'Cloud',
  component: () => import('./azure-arm-api.vue'),
  icon: FileText,
};

