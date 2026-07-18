import { Brackets } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'toml-linter',
  title: 'TOML Linter',
  description: 'Lint and check TOML content',
  keywords: ['toml','linter'],
  component: () => import('./toml-linter.vue'),
  icon: Brackets,
  category: 'TOML',
};
