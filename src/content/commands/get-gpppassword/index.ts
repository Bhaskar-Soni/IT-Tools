import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-gpppassword',
  title: 'Get Gpppassword',
  description: 'A collection of get gpppassword resources and tools',
  keywords: ['get-gpppassword'],
  category: 'Windows Commands',
  component: () => import('./get-gpppassword.vue'),
  icon: Terminal,
};

