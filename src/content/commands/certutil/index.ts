import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'certutil',
  title: 'Certutil',
  description: 'A collection of certutil resources and tools',
  keywords: ['certutil'],
  category: 'Windows Commands',
  component: () => import('./certutil.vue'),
  icon: Terminal,
};

