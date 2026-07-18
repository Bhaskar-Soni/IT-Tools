import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'iana-whois-checker',
  title: 'Whois Checker',
  description: 'Check whois for a domain using IANA Website',
  keywords: ['iana','whois','checker'],
  component: () => import('./iana-whois-checker.vue'),
  icon: World,
  category: 'Network',
};
