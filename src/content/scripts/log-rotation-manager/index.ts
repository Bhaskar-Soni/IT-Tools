import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'log-rotation-manager',
  title: 'Log Rotation Manager',
  description: 'Automated log rotation with size thresholds, compression, and retention cleanup.',
  keywords: ['log rotation', 'bash', 'logs', 'retention', 'automation'],
  category: 'Automation',
  component: () => import('./log-rotation-manager.vue'),
  icon: Code,
};

