import { Qrcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'wifi-qrcode-generator',
  title: 'WiFi QR Code generator',
  description: 'Generate and download QR codes for quick connections to WiFi networks.',
  keywords: ['qr','code','generator','square','color','link','low','medium','quartile','high','transparent','wifi'],
  component: () => import('./wifi-qr-code-generator.vue'),
  icon: Qrcode,
  category: 'Uncategorized',
};
