import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: 'cli-tools',
  title: 'Cli Tools',
  description: 'A collection of cli tools resources and tools',
  keywords: ['cli-tools', 'links', 'resources'],
  category: 'Tech Tools',
  component: () => import('./cli-tools.vue'),
  icon: Link,
};

