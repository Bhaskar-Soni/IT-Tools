import { FileCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'template',
  slug: '{{name}}',
  title: '{{title}}',
  description: '{{description}}',
  keywords: ['{{name}}', 'template', 'document'],
  component: () => import('./{{name}}.vue'),
  icon: FileText,
  category: '{{category}}',
};

