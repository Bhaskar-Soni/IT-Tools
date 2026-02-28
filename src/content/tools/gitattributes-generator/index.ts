import { BrandGit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gitattributes-generator',
  title: 'Gitattributes Generator',
  description: 'Generate .gitattributes from common configuration of https://github.com/alexkaratarakis/gitattributes',
  keywords: ['gitattributes','generator'],
  component: () => import('./gitattributes-generator.vue'),
  icon: BrandGit,
  category: 'Development',
};
