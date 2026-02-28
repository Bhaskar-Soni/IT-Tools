import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'outlook-parser',
  title: 'Outlook MSG Parser',
  description: 'Parse Outlook MSG Files',
  keywords: ['outlook','email','msg','parser'],
  component: () => import('./outlook-parser.vue'),
  icon: Mail,
  category: 'Forensic',
};
