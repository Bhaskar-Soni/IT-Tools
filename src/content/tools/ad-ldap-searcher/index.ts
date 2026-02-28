import { Folder } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ad-ldap-searcher',
  title: 'ActiveDirectory LDAP properties searcher',
  description: 'Search in mapping of LDAP properties and ActiveDirectory UI',
  keywords: ['active','directory','ad','ldap','prop','searcher'],
  component: () => import('./ad-ldap-searcher.vue'),
  icon: Folder,
  category: 'Forensic',
};
