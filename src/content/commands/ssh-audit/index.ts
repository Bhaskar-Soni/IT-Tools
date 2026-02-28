import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ssh-audit',
  title: 'Ssh Audit',
  description: 'A collection of ssh audit resources and tools',
  keywords: ['ssh-audit'],
  category: 'Linux Commands',
  component: () => import('./ssh-audit.vue'),
  icon: Terminal,
};

