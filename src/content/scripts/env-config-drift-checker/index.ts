import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'env-config-drift-checker',
  title: 'Env Config Drift Checker',
  description: 'Compare environment files and detect added, removed, or modified configuration values.',
  keywords: ['env files', 'configuration drift', 'deployment', 'diff', 'python'],
  category: 'Deployment',
  component: () => import('./env-config-drift-checker.vue'),
  icon: Code,
};

