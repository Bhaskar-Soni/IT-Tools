import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'recon-methodology',
  title: 'Recon Methodology',
  description: 'A collection of recon methodology resources and tools',
  keywords: ['recon-methodology'],
  category: 'Security Concepts',
  component: () => import('./recon-methodology.vue'),
  icon: FileText,
};

