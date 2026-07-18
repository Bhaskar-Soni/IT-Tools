import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'o365recon',
  title: 'O365recon',
  description: 'A collection of o365recon resources and tools',
  keywords: ['o365recon'],
  category: 'Cloud Identity',
  component: () => import('./o365recon.vue'),
  icon: FileText,
};

