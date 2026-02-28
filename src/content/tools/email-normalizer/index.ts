import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'email-normalizer',
  title: 'Email normalizer',
  description: 'Normalize email addresses to a standard format for easier comparison. Useful for deduplication and data cleaning.',
  keywords: ['email','normalizer'],
  component: () => import('./email-normalizer.vue'),
  icon: Mail,
  category: 'Email',
};
