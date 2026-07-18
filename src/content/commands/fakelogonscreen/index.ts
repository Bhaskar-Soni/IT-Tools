import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fakelogonscreen',
  title: 'Fakelogonscreen',
  description: 'A collection of fakelogonscreen resources and tools',
  keywords: ['fakelogonscreen'],
  category: 'Tool Commands',
  component: () => import('./fakelogonscreen.vue'),
  icon: Terminal,
};

