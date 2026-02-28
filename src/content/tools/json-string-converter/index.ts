import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-string-converter',
  title: 'Json string converter',
  description: 'Convert your text or JavaScript objects to JSON string format and vice versa.',
  keywords: ['json','string','converter'],
  component: () => import('./json-string-converter.vue'),
  icon: Braces,
  category: 'JSON',
};
