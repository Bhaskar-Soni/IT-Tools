import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ssh-keygen',
  title: 'Ssh Keygen',
  description: 'A collection of ssh keygen resources and tools',
  keywords: ['ssh-keygen'],
  category: 'Linux Commands',
  component: () => import('./ssh-keygen.vue'),
  icon: Terminal,
};

