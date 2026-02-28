import { ClearFormatting } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'har-sanitizer',
  title: 'HAR Sanitizer',
  description: 'HAR Files Sanitizer',
  keywords: ['har','sanitizer'],
  component: () => import('./har-sanitizer.vue'),
  icon: ClearFormatting,
  category: 'Network',
};
