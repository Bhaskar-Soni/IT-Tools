import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-toon',
  title: 'JSON to TOON',
  description: 'Convert JSON object to TOON representation for LLM/GPT usage',
  keywords: ['json','llm','gpt','toon'],
  component: () => import('./json-to-toon.vue'),
  icon: Braces,
  category: 'Text',
};
