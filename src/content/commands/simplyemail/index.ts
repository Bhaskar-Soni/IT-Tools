import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'simplyemail',
  title: 'Simplyemail',
  description: 'A collection of simplyemail resources and tools',
  keywords: ['simplyemail'],
  category: 'Linux Commands',
  component: () => import('./simplyemail.vue'),
  icon: Terminal,
};

