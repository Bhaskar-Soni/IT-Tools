import { Clock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'benchmark-builder',
  title: 'Benchmark builder',
  description: 'Easily compare execution time of tasks with this very simple online benchmark builder.',
  keywords: ['benchmark','builder','execution','duration','mean','variance'],
  component: () => import('./benchmark-builder.vue'),
  icon: Clock,
  category: 'Measurement',
};
