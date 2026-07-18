import { Share } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'social-link-sharer',
  title: 'Social Link Sharer',
  description: 'Generate share link href for common Social Networks',
  keywords: ['social','link','sharer'],
  component: () => import('./social-link-sharer.vue'),
  icon: Share,
  category: 'Text',
};
