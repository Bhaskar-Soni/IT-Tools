import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'seatbelt',
  title: 'Seatbelt',
  description: 'A collection of seatbelt resources and tools',
  keywords: ['seatbelt'],
  category: 'Tool Commands',
  component: () => import('./seatbelt.vue'),
  icon: Terminal,
};

