import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-xml',
  title: 'JSON to XML',
  description: 'Convert JSON to XML',
  keywords: ['json','xml'],
  component: () => import('./json-to-xml.vue'),
  icon: Braces,
  category: 'JSON',
};
