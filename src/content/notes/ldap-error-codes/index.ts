import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'ldap-error-codes',
  title: 'Ldap Error Codes',
  description: 'A collection of ldap error codes resources and tools',
  keywords: ['ldap-error-codes'],
  category: 'Identity & AD',
  component: () => import('./ldap-error-codes.vue'),
  icon: FileText,
};

