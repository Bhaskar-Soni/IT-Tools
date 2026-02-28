import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'gaia-id',
  title: 'Gaia Id',
  description: 'A collection of gaia id resources and tools',
  keywords: ['gaia-id'],
  category: 'Recon OSINT',
  component: () => import('./gaia-id.vue'),
  icon: FileText,
};

