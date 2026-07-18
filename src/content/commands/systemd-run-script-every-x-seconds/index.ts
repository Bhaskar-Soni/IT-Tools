import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'systemd-run-script-every-x-seconds',
  title: 'Systemd Run Script Every X Seconds',
  description: 'A collection of systemd run script every x seconds resources and tools',
  keywords: ['systemd-run-script-every-x-seconds'],
  category: 'Linux Commands',
  component: () => import('./systemd-run-script-every-x-seconds.vue'),
  icon: Terminal,
};

