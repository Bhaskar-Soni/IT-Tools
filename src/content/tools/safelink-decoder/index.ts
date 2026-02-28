import { Mailbox } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'safelink-decoder',
  title: 'Outlook Safelink decoder',
  description: 'Decode Outlook SafeLink links',
  keywords: ['outlook','safelink','decoder'],
  component: () => import('./safelink-decoder.vue'),
  icon: Mailbox,
  category: 'Forensic',
};
