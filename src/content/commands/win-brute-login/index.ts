import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'win-brute-login',
  title: 'Win Brute Login',
  description: 'A collection of win brute login resources and tools',
  keywords: ['win-brute-login'],
  category: 'Tool Commands',
  component: () => import('./win-brute-login.vue'),
  icon: Terminal,
};

