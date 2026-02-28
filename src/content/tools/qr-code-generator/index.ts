import { Qrcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'qrcode-generator',
  title: 'QR Code generator',
  description: '>-',
  keywords: ['qr','code','generator','square','color','link','low','medium','quartile','high','transparent'],
  component: () => import('./qr-code-generator.vue'),
  icon: Qrcode,
  category: 'Uncategorized',
};
