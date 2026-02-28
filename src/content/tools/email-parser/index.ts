import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'email-parser',
  title: 'Email Parser',
  description: 'Parse and extract information from raw Email content',
  keywords: ['email','parser','header','rfc2822','rfc5322','rfc822'],
  component: () => import('./email-parser.vue'),
  icon: Mail,
  category: 'Email',
};
