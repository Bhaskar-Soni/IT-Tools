import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'ad-groups-with-elevated-rights',
  title: 'Ad Groups With Elevated Rights',
  description: 'A collection of ad groups with elevated rights resources and tools',
  keywords: ['ad-groups-with-elevated-rights'],
  category: 'Identity & AD',
  component: () => import('./ad-groups-with-elevated-rights.vue'),
  icon: FileText,
};

