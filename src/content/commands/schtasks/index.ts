import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'schtasks',
  title: 'Schtasks',
  description: 'A collection of schtasks resources and tools',
  keywords: ['schtasks'],
  category: 'Windows Commands',
  component: () => import('./schtasks.vue'),
  icon: Terminal,
};

