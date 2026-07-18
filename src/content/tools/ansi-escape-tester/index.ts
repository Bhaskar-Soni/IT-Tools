import { Terminal2 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ansi-escape-tester',
  title: 'ANSI Escape Tester',
  description: 'Create and test ANSI console escape sequences',
  keywords: ['ansi','escape','tester'],
  component: () => import('./ansi-escape-tester.vue'),
  icon: Terminal2,
  category: 'Development',
};
