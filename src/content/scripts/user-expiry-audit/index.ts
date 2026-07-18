import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'user-expiry-audit',
  title: 'User Expiry Audit',
  description: 'Audit local account expiration dates and flag users approaching deactivation.',
  keywords: ['user accounts', 'expiry', 'linux security', 'audit', 'identity'],
  category: 'System',
  component: () => import('./user-expiry-audit.vue'),
  icon: Code,
};

