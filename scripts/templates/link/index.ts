import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'link',
  slug: '{{name}}',
  title: '{{title}}',
  description: '{{description}}',
  keywords: ['{{name}}', 'links', 'resources'],
  category: '{{category}}',
  component: () => import('./{{name}}.vue'),
  icon: Link,
};

