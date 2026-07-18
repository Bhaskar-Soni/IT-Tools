import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'blogs-podcasts-videos',
  title: 'Blogs Podcasts Videos',
  description: 'A collection of blogs podcasts videos resources and tools',
  keywords: ['blogs-podcasts-videos', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./blogs-podcasts-videos.vue'),
  icon: Link,
};

