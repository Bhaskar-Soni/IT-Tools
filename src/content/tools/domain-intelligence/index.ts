import { Search } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'domain-intelligence',
  title: 'Domain Intelligence',
  description: 'Collect DNS, RDAP, certificate, and infrastructure intelligence for a domain',
  keywords: ['domain', 'osint', 'dns', 'rdap', 'whois', 'certificate-transparency', 'tool'],
  category: 'OSINT',
  component: () => import('./domain-intelligence.vue'),
  icon: Search,
};
