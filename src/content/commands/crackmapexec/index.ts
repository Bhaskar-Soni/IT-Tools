import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'crackmapexec',
  title: 'Crackmapexec',
  description: 'A collection of crackmapexec resources and tools',
  keywords: ['crackmapexec'],
  category: 'Hunting Commands',
  component: () => import('./crackmapexec.vue'),
  icon: Terminal,
};


