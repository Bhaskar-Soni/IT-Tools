import { Mailbox } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'bounce-parser',
  title: 'Bounce Email Parser',
  description: 'Parse SMTP Bounce Emails',
  keywords: ['bounce','email','smtp','parser'],
  component: () => import('./bounce-parser.vue'),
  icon: Mailbox,
  category: 'Email',
};
