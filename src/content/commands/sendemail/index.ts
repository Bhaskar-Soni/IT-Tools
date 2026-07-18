import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sendemail',
  title: 'Sendemail',
  description: 'A collection of sendemail resources and tools',
  keywords: ['sendemail'],
  category: 'Tool Commands',
  component: () => import('./sendemail.vue'),
  icon: Terminal,
};

