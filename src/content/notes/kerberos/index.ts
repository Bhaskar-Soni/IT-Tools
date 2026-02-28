import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'kerberos',
  title: 'Kerberos',
  description: 'A collection of kerberos resources and tools',
  keywords: ['kerberos'],
  category: 'Identity & AD',
  component: () => import('./kerberos.vue'),
  icon: FileText,
};

