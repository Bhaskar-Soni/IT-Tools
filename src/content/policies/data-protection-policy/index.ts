import type { ContentItem } from '@/core/content.types';
import { Database } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'policy',
  slug: 'data-protection-policy',
  title: 'Data Protection Policy',
  description: 'Guidelines for handling and protecting sensitive data.',
  keywords: ['policy', 'data', 'protection', 'privacy', 'gdpr'],
  component: () => import('./data-protection-policy.vue'),
  icon: Database,
  category: 'Data Protection',
};
