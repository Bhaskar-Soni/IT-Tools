import { Mailbox } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sharepoint-decoder',
  title: 'Sharepoint Share Url Decoder',
  description: 'Decode sharepoint.com share urls to "normal" Sharepoint Url',
  keywords: ['sharepoint','url','decoder'],
  component: () => import('./sharepoint-decoder.vue'),
  icon: Mailbox,
  category: 'Forensic',
};
