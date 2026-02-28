import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-hotfix',
  title: 'Get Hotfix',
  description: 'A collection of get hotfix resources and tools',
  keywords: ['get-hotfix'],
  category: 'Windows Commands',
  component: () => import('./get-hotfix.vue'),
  icon: Terminal,
};

