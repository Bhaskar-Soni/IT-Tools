import { Qrcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'qr-contact-info-generator',
  title: 'QR Contact Info generator',
  description: 'Generate and download QR codes for Contact information (vCard), and customize the background and foreground colors.',
  keywords: ['qr','contact','vcard','generator','business','networking'],
  component: () => import('./qr-contact-info-generator.vue'),
  icon: Qrcode,
  category: 'Barcodes',
};
