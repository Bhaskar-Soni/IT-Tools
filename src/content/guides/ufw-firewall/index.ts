import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'ufw-firewall',
  title: 'Ufw Firewall',
  description: 'A collection of ufw firewall resources and tools',
  keywords: ['ufw-firewall'],
  category: 'Configurations',
  component: () => import('./ufw-firewall.vue'),
  icon: Book,
};

