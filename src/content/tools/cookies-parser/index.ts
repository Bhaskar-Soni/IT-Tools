import { Cookie } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'cookies-parser',
  title: 'Cookies Parser',
  description: 'Parse Cookie HTTP Header',
  keywords: ['cookies','parser'],
  component: () => import('./cookies-parser.vue'),
  icon: Cookie,
  category: 'Forensic',
};
