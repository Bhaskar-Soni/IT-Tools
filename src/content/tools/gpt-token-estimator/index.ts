import { CurrencyDollar } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gpt-token-estimator',
  title: 'GPT Token Estimator',
  description: 'OpenAI GPT Token Estimator',
  keywords: ['gpt','llm','openai','token','estimator'],
  component: () => import('./gpt-token-estimator.vue'),
  icon: CurrencyDollar,
  category: 'Text',
};
