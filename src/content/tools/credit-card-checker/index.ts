import { CreditCard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'credit-card-checker',
  title: 'Credit Card Checker',
  description: 'Check a Credit Card number for validity',
  keywords: ['credit','card','checker'],
  component: () => import('./credit-card-checker.vue'),
  icon: CreditCard,
  category: 'Data',
};
