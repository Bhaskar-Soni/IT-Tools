import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: '{{name}}',
  title: '{{title}}',
  description: '{{description}}',
  keywords: ['{{name}}', 'script', 'bash', 'shell'],
  category: '{{category}}',
  component: () => import('./{{name}}.vue'),
  icon: Code,
};

