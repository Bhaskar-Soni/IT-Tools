import { FileCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'template',
  slug: 'change-management-plan-template',
  title: 'Change Management Plan Template',
  description: 'Operational change plan template with risk controls, approvals, and rollback procedures.',
  keywords: ['change management', 'deployment plan', 'rollback', 'operations', 'template'],
  component: () => import('./change-management-plan-template.vue'),
  icon: FileCheck,
  category: 'Project Management',
};

