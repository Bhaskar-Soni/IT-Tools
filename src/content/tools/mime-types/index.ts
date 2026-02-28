import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mime-types',
  title: 'MIME types',
  description: 'Convert MIME types to file extensions and vice-versa.',
  keywords: ['mime','types','extension','content','type'],
  component: () => import('./mime-types.vue'),
  icon: World,
  category: 'Web',
};
