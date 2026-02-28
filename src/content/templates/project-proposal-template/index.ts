import type { ContentItem } from '@/core/content.types';
import { FileCheck } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'template',
  slug: 'project-proposal-template',
  title: 'Project Proposal Template',
  description: 'Comprehensive project proposal template for planning and documentation.',
  keywords: ['template', 'project', 'proposal', 'planning', 'documentation'],
  component: () => import('./project-proposal-template.vue'),
  icon: FileCheck,
  category: 'Project Management',
};
