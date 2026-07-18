import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'trufflehog',
  title: 'Trufflehog',
  description: 'A collection of trufflehog resources and tools',
  keywords: ['trufflehog'],
  category: 'Linux Commands',
  component: () => import('./trufflehog.vue'),
  icon: Terminal,
};

