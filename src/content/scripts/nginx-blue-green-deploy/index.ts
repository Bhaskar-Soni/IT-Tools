import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'nginx-blue-green-deploy',
  title: 'Nginx Blue Green Deploy',
  description: 'Blue/green deployment flow for Nginx with automatic health-check rollback.',
  keywords: ['nginx', 'deployment', 'blue green', 'rollback', 'release automation'],
  category: 'Deployment',
  component: () => import('./nginx-blue-green-deploy.vue'),
  icon: Code,
};

