import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'msbuild',
  title: 'Msbuild',
  description: 'A collection of msbuild resources and tools',
  keywords: ['msbuild'],
  category: 'Tool Commands',
  component: () => import('./msbuild.vue'),
  icon: Terminal,
};

