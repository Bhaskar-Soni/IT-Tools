import { Qrcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'qr-code-decoder',
  title: 'QR Code decoder',
  description: 'QR Code Reader',
  keywords: ['qrcode','qr-code','decoder','reader','wifi','otp','parser'],
  component: () => import('./qr-code-decoder.vue'),
  icon: Qrcode,
  category: 'Barcodes',
};
