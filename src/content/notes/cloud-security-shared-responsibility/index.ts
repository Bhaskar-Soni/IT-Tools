import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'cloud-security-shared-responsibility',
  title: 'Cloud Security Shared Responsibility',
  description: 'A collection of cloud security shared responsibility resources and tools',
  keywords: ['cloud-security-shared-responsibility'],
  category: 'Cloud',
  component: () => import('./cloud-security-shared-responsibility.vue'),
  icon: FileText,
};

