import { BrandGit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gitignore-generator',
  title: 'GitIgnore Generator',
  description: 'Generate .gitignore for a set of common templates',
  keywords: ['gitignore','generator'],
  component: () => import('./gitignore-generator.vue'),
  icon: BrandGit,
  category: 'Development',
};
