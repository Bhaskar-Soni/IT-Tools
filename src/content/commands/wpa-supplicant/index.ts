import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wpa-supplicant',
  title: 'Wpa Supplicant',
  description: 'A collection of wpa supplicant resources and tools',
  keywords: ['wpa-supplicant'],
  category: 'Linux Commands',
  component: () => import('./wpa-supplicant.vue'),
  icon: Terminal,
};

