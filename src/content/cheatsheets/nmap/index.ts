import { Wifi } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'nmap',
  title: 'Nmap Cheatsheet',
  description: 'Network mapping and security scanning commands reference',
  keywords: ['nmap', 'network', 'scanning', 'security', 'recon'],
  category: 'Tools',
  component: () => import('./nmap.vue'),
  icon: Wifi,
};

