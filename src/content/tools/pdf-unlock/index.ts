import { LockOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-unlock',
  title: 'Pdf Decrypt and Unlock',
  description: 'Decrypt a PDF and unlock (remove security permissions)',
  keywords: ['pdf','unlock','decrypt'],
  component: () => import('./pdf-unlock.vue'),
  icon: LockOff,
  category: 'PDF',
};
