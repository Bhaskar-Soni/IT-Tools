import { Prompt } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ai-prompt-splitter',
  title: 'AI Prompt Splitter',
  description: 'Split a long document to multiple chat (ie ChatGPT) prompts',
  keywords: ['ai','chatgpt','gpt','prompt','splitter'],
  component: () => import('./ai-prompt-splitter.vue'),
  icon: Prompt,
  category: 'Text',
};
