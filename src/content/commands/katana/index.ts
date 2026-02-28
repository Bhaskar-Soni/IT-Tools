import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'katana',
  title: 'Katana',
  description: 'A collection of katana resources and tools',
  keywords: ['katana'],
  category: 'Tool Commands',
  component: () => import('./katana.vue'),
  icon: Terminal,
};

