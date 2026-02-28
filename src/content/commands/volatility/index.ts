import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'volatility',
  title: 'Volatility',
  description: 'A collection of volatility resources and tools',
  keywords: ['volatility'],
  category: 'Forensic Commands',
  component: () => import('./volatility.vue'),
  icon: Terminal,
};

