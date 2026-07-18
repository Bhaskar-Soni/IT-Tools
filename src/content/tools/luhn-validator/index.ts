import { Check } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'luhn-validator',
  title: 'Luhn Validator',
  description: 'Check and generate key for identifier validated by a Luhn checknum',
  keywords: ['luhn','credit-card','imei','identifier','validator'],
  component: () => import('./luhn-validator.vue'),
  icon: Check,
  category: 'Data',
};
