import { BrandJavascript } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-typescript',
  title: 'Json to Typescript',
  description: 'Convert JSON to Typescript code',
  keywords: ['json','typescript'],
  component: () => import('./json-to-typescript.vue'),
  icon: BrandJavascript,
  category: 'Development',
};
