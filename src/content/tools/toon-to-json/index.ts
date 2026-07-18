import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'toon-to-json',
  title: 'TOON to JSON',
  description: 'Convert TOON representation to JSON object for LLM usage',
  keywords: ['toon','llm','gpt','json'],
  component: () => import('./toon-to-json.vue'),
  icon: Braces,
  category: 'Text',
};
