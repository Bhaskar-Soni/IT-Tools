import { {{icon}} } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: '{{type}}',
  slug: '{{name}}',
  title: '{{title}}',
  description: '{{description}}',
  keywords: ['{{name}}'],
  category: '{{category}}',
  component: () => import('./{{name}}.vue'),
  icon: {{icon}},
};

