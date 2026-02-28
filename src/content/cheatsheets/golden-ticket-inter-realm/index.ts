import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'golden-ticket-inter-realm',
  title: 'Golden Ticket Inter Realm',
  description: 'A collection of golden ticket inter realm resources and tools',
  keywords: ['golden-ticket-inter-realm'],
  category: 'Windows AD Attacks',
  component: () => import('./golden-ticket-inter-realm.vue'),
  icon: FileText,
};

