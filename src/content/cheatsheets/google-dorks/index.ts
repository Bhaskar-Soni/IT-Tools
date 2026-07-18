import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'google-dorks',
  title: 'Google Dorks',
  description: 'A collection of google dorks resources and tools',
  keywords: ['google-dorks'],
  category: 'Recon OSINT',
  component: () => import('./google-dorks.vue'),
  icon: FileText,
};

