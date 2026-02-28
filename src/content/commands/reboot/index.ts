import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'reboot',
  title: 'Reboot',
  description: 'A collection of reboot resources and tools',
  keywords: ['reboot'],
  category: 'Windows Commands',
  component: () => import('./reboot.vue'),
  icon: Terminal,
};

