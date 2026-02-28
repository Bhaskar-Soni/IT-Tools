import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sigurlfind3r',
  title: 'Sigurlfind3r',
  description: 'A collection of sigurlfind3r resources and tools',
  keywords: ['sigurlfind3r'],
  category: 'Linux Commands',
  component: () => import('./sigurlfind3r.vue'),
  icon: Terminal,
};

