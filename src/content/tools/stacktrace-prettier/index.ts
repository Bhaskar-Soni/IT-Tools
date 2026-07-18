import { Stack } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'stacktrace-prettier',
  title: 'Stacktrace prettier',
  description: 'Highlight .Net and JS stacktraces',
  keywords: ['stacktrace','prettier','highlighter'],
  component: () => import('./stacktrace-prettier.vue'),
  icon: Stack,
  category: 'Development',
};
