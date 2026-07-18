import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ldap-domain-dump',
  title: 'Ldap Domain Dump',
  description: 'A collection of ldap domain dump resources and tools',
  keywords: ['ldap-domain-dump'],
  category: 'Linux Commands',
  component: () => import('./ldap-domain-dump.vue'),
  icon: Terminal,
};

