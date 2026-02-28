import { Dimensions } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'levenshtein-calculator',
  title: 'Levenshtein Calculator',
  description: 'Compute Levenshtein distance and scores between to strings',
  keywords: ['levenshtein','damerau','distance','calculator'],
  component: () => import('./levenshtein-calculator.vue'),
  icon: Dimensions,
  category: 'Text',
};
