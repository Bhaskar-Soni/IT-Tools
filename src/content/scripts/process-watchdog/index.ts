import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'process-watchdog',
  title: 'Process Watchdog',
  description: 'PowerShell watchdog script for monitoring and auto-restarting critical background processes.',
  keywords: ['powershell', 'watchdog', 'process monitoring', 'restart', 'operations'],
  category: 'System',
  component: () => import('./process-watchdog.vue'),
  icon: Code,
};

