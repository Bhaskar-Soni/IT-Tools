import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'linux-service-management-commands',
  title: 'Linux Service Management Commands',
  description: 'A collection of linux service management commands resources and tools',
  keywords: ['linux-service-management-commands'],
  category: 'Linux Administration',
  component: () => import('./linux-service-management-commands.vue'),
  icon: FileText,
};

