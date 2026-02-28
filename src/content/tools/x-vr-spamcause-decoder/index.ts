import { RecordMail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'x-vr-spamcause-decoder',
  title: 'X-VR-SpamCause Decoder',
  description: 'Decode X-VR-SPAMCAUSE header in OVH mails',
  keywords: ['ovh','vade','retro','vr','spam','spamcause','decoder'],
  component: () => import('./x-vr-spamcause-decoder.vue'),
  icon: RecordMail,
  category: 'Network',
};
