import { DeviceMobileMessage } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'unicode-to-gsm7',
  title: 'Unicode to GSM-7',
  description: 'Encode unicode text to SMS GSM-7 encoding and display related SMS send info',
  keywords: ['unicode','segment','sms','gsm7'],
  component: () => import('./unicode-to-gsm7.vue'),
  icon: DeviceMobileMessage,
  category: 'Text',
};
