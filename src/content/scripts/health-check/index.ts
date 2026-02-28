import type { ContentItem } from '@/core/content.types';
import { Code } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'script',
  slug: 'health-check',
  title: 'Health Check',
  description: 'Multi-format script for health-check',
  keywords: ['health-check', 'script', 'automation'],
  component: () => import('./health-check.vue'),
  icon: Code,
  category: 'Monitoring',
};