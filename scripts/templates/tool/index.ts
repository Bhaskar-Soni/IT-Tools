import { Settings } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: '{{name}}',
  title: '{{title}}',
  description: '{{description}}',
  keywords: ['{{name}}', 'tool', 'utility'],
  category: '{{category}}',
  component: () => import('./{{name}}.vue'),
  icon: Settings,
};

