import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'phishing-html-linter',
  title: 'Phishing Html Linter',
  description: 'A collection of phishing html linter resources and tools',
  keywords: ['phishing-html-linter'],
  category: 'Linux Commands',
  component: () => import('./phishing-html-linter.vue'),
  icon: Terminal,
};

