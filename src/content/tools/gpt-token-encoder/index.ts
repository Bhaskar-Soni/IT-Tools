import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gpt-token-encoder',
  title: 'GPT Token Encoder/Decoder',
  description: 'Encode text to GPT tokens and decode GPT tokens back to text',
  keywords: ['gpt','llm','openai','token','encode','decode'],
  component: () => import('./gpt-token-encoder.vue'),
  icon: FileText,
  category: 'Text',
};
