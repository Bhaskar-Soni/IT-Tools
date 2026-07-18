import { Bookmarks } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'torrent-to-magnet',
  title: 'Torrent to Magnet',
  description: 'Convert a torrent file to a Magnet url',
  keywords: ['torrent','magnet','url','link'],
  component: () => import('./torrent-to-magnet.vue'),
  icon: Bookmarks,
  category: 'Converters',
};
