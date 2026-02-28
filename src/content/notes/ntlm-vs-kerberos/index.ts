import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'ntlm-vs-kerberos',
  title: 'Ntlm Vs Kerberos',
  description: 'A collection of ntlm vs kerberos resources and tools',
  keywords: ['ntlm-vs-kerberos'],
  category: 'Identity & AD',
  component: () => import('./ntlm-vs-kerberos.vue'),
  icon: FileText,
};

