import { LettersCase } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'i-and-l-checker',
  title: 'I and L Checker',
  description: 'Check a password or text with highlighting of 1, l, I, 0, O',
  keywords: ['ambiguous','text','letters','password','checker'],
  component: () => import('./i-and-l-checker.vue'),
  icon: LettersCase,
  category: 'Text',
};
