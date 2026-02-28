import { TransferIn } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rsync-generator',
  title: 'Rsync Generator',
  description: 'Rsync command generator',
  keywords: ['rsync'],
  component: () => import('./rsync-generator.vue'),
  icon: TransferIn,
  category: 'Network',
};
