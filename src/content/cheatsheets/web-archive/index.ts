import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'web-archive',
  title: 'Web Archive',
  description: 'A collection of web archive resources and tools',
  keywords: ['web-archive'],
  category: 'Recon OSINT',
  component: () => import('./web-archive.vue'),
  icon: FileText,
};

