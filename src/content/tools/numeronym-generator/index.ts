import { SortDescendingNumbers } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'numeronym-generator',
  title: 'Numeronym generator',
  description: 'A numeronym is a word where a number is used to form an abbreviation. For example, "i18n" is a numeronym of "internationalization" where 18 stands for the number of letters between the first i and the last n in the word.',
  keywords: ['numeronym','generator','abbreviation','i18n','a11y','l10n'],
  component: () => import('./numeronym-generator.vue'),
  icon: SortDescendingNumbers,
  category: 'Generators',
};
