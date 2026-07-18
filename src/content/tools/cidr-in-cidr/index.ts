import { ChevronDown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'cidr-in-cidr',
  title: 'IPv4-6/IPRange/CIDR in IPRange/CIDR/IPMask',
  description: 'Given a CIDR/IP Range/Wildcard IP/IP Mask, tell if a given IPv4-6/Range/CIDR/Wildcard IP/IP Mask is in subnet range',
  keywords: ['ip','cidr','range','mask','wildcard','ipv4','ipv6','subnet','include','inclusion'],
  component: () => import('./cidr-in-cidr.vue'),
  icon: ChevronDown,
  category: 'Network',
};
