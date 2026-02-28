import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'desktopimgdownldr',
  title: 'Desktopimgdownldr',
  description: 'A collection of desktopimgdownldr resources and tools',
  keywords: ['desktopimgdownldr'],
  category: 'Windows Commands',
  component: () => import('./desktopimgdownldr.vue'),
  icon: Terminal,
};

