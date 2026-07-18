import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-encrypt',
  title: 'Pdf Encrypt',
  description: 'Encrypt and add protection to a PDF File',
  keywords: ['pdf','encrypt'],
  component: () => import('./pdf-encrypt.vue'),
  icon: Lock,
  category: 'PDF',
};
