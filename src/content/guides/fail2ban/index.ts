import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'fail2ban',
  title: 'Fail2ban',
  description: 'A collection of fail2ban resources and tools',
  keywords: ['fail2ban'],
  category: 'Configurations',
  component: () => import('./fail2ban.vue'),
  icon: Book,
};

