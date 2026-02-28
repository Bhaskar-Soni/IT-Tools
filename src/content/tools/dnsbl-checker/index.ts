import { MailForward } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dnsbl-checker',
  title: 'DNSBL Checker',
  description: 'Check if a given IP is in any of known DNS Blacklist servers (spam block)',
  keywords: ['dnsbl','block','dns','checker'],
  component: () => import('./dnsbl-checker.vue'),
  icon: MailForward,
  category: 'Network',
};
