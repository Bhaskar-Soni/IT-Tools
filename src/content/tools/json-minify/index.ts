import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-minify',
  title: 'JSON minify',
  description: 'Minify and compress your JSON by removing unnecessary whitespace.',
  keywords: ['json','minify','format'],
  component: () => import('./json-minify.vue'),
  icon: Braces,
  category: 'JSON',
};
