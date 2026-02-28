import { Language } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'regex-tester',
  title: 'Regex Tester',
  description: 'Test your regular expressions with sample text.',
  keywords: ['regex','tester','sample','expression'],
  component: () => import('./regex-tester.vue'),
  icon: Language,
  category: 'Text',
};
