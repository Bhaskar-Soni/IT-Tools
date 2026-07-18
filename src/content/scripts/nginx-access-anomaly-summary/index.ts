import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'nginx-access-anomaly-summary',
  title: 'Nginx Access Anomaly Summary',
  description: 'Analyze Nginx access logs for unusual error rates and high-frequency source IPs.',
  keywords: ['nginx', 'log analysis', 'anomaly detection', 'http errors', 'monitoring'],
  category: 'Monitoring',
  component: () => import('./nginx-access-anomaly-summary.vue'),
  icon: Code,
};

