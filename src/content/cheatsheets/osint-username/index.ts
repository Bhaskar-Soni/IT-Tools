import type { ContentItem } from '@/core/content.types';
import { Search } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'osint-username',
  title: 'OSINT Username Lookup Cheatsheet',
  description: 'Quick OSINT checklist for finding accounts using only a username.',
  keywords: ['osint', 'username', 'investigation', 'social media', 'cheatsheet'],
  component: () => import('./osint-username.vue'),
  icon: Search,
  category: 'OSINT',
};

