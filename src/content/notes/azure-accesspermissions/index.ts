import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'azure-accesspermissions',
  title: 'Azure Accesspermissions',
  description: 'A collection of azure accesspermissions resources and tools',
  keywords: ['azure-accesspermissions'],
  category: 'Cloud',
  component: () => import('./azure-accesspermissions.vue'),
  icon: FileText,
};

