import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ldap-scanner',
  title: 'Ldap Scanner',
  description: 'A collection of ldap scanner resources and tools',
  keywords: ['ldap-scanner'],
  category: 'Linux Commands',
  component: () => import('./ldap-scanner.vue'),
  icon: Terminal,
};

