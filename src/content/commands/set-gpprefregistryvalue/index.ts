import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'set-gpprefregistryvalue',
  title: 'Set Gpprefregistryvalue',
  description: 'A collection of set gpprefregistryvalue resources and tools',
  keywords: ['set-gpprefregistryvalue'],
  category: 'Windows Commands',
  component: () => import('./set-gpprefregistryvalue.vue'),
  icon: Terminal,
};

