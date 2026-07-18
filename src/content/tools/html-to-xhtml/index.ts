import { BrandHtml5 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-to-xhtml',
  title: 'HTML to XHTML',
  description: 'Convert HTML to strict XHTML (XML parsable, self closing tags...)',
  keywords: ['html','xhtml'],
  component: () => import('./html-to-xhtml.vue'),
  icon: BrandHtml5,
  category: 'Web',
};
