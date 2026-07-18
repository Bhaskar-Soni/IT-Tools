import { LetterCaseToggle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'case-converter',
  title: 'Case converter',
  description: 'Transform the case of a string and choose between different formats',
  keywords: ['case','converter','camelCase','capitalCase','constantCase','dotCase','headerCase','noCase','paramCase','pascalCase','pathCase','sentenceCase','snakeCase','titleCase','spongeCase','swapCase',],
  component: () => import('./case-converter.vue'),
  icon: LetterCaseToggle,
  category: 'Text',
};
