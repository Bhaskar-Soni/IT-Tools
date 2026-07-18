import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'kerberos-error-codes',
  title: 'Kerberos Error Codes',
  description: 'A collection of kerberos error codes resources and tools',
  keywords: ['kerberos-error-codes'],
  category: 'Identity & AD',
  component: () => import('./kerberos-error-codes.vue'),
  icon: FileText,
};

