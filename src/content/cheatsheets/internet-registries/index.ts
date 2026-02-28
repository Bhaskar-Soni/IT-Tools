import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'internet-registries',
  title: 'Internet Registries',
  description: 'A collection of internet registries resources and tools',
  keywords: ['internet-registries'],
  category: 'Recon OSINT',
  component: () => import('./internet-registries.vue'),
  icon: FileText,
};

