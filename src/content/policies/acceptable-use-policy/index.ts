import type { ContentItem } from '@/core/content.types';
import { FileCheck } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'policy',
  slug: 'acceptable-use-policy',
  title: 'Acceptable Use Policy',
  description: 'Guidelines for appropriate use of company resources.',
  keywords: ['policy', 'acceptable', 'use', 'resources', 'compliance'],
  component: () => import('./acceptable-use-policy.vue'),
  icon: FileCheck,
  category: 'Usage',
};
