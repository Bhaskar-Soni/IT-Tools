import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'api-uptime-monitor',
  title: 'API Uptime Monitor',
  description: 'HTTP endpoint monitoring script with retries, timeout controls, and machine-readable output.',
  keywords: ['api monitoring', 'uptime', 'python', 'health checks', 'http'],
  category: 'Monitoring',
  component: () => import('./api-uptime-monitor.vue'),
  icon: Code,
};

