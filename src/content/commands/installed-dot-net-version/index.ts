import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'installed-dot-net-version',
  title: 'Installed Dot Net Version',
  description: 'A collection of installed dot net version resources and tools',
  keywords: ['installed-dot-net-version'],
  category: 'Tool Commands',
  component: () => import('./installed-dot-net-version.vue'),
  icon: Terminal,
};

