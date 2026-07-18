import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'linux-user-management-commands',
  title: 'Linux User Management Commands',
  description: 'A collection of linux user management commands resources and tools',
  keywords: ['linux-user-management-commands'],
  category: 'Linux Administration',
  component: () => import('./linux-user-management-commands.vue'),
  icon: FileText,
};

