import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'systemd-service-health-monitor',
  title: 'Systemd Service Health Monitor',
  description: 'Monitor systemd units and optionally auto-restart unhealthy services with clear exit codes.',
  keywords: ['systemd', 'service health', 'linux monitoring', 'restart', 'operations'],
  category: 'Monitoring',
  component: () => import('./systemd-service-health-monitor.vue'),
  icon: Code,
};

