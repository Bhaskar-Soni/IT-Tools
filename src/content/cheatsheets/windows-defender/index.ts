import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'windows-defender',
  title: 'Windows Defender',
  description: 'A collection of windows defender resources and tools',
  keywords: ['windows-defender'],
  category: 'Windows Defense',
  component: () => import('./windows-defender.vue'),
  icon: FileText,
};

