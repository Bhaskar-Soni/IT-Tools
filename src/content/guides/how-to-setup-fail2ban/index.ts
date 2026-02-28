import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-setup-fail2ban',
  title: 'How To Setup Fail2ban',
  description: 'A collection of how to setup fail2ban resources and tools',
  keywords: ['how-to-setup-fail2ban'],
  category: 'How-To Guides',
  component: () => import('./how-to-setup-fail2ban.vue'),
  icon: Book,
};

