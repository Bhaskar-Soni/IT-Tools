import { BrandPython } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-python',
  title: 'Json to Python',
  description: 'Convert JSON to Python classes',
  keywords: ['json','to','python'],
  component: () => import('./json-to-python.vue'),
  icon: BrandPython,
  category: 'JSON',
};
