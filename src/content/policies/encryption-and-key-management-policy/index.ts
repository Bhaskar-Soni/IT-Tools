import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'encryption-and-key-management-policy',
  title: 'Encryption And Key Management Policy',
  description: 'A collection of encryption and key management policy resources and tools',
  keywords: ['encryption-and-key-management-policy'],
  category: 'Data Protection',
  component: () => import('./encryption-and-key-management-policy.vue'),
  icon: Shield,
};

