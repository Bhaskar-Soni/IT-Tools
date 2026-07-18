import { Ad } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'utm-url-generator',
  title: 'UTM Url Generator',
  description: 'Generate an URL with utm_ parameters',
  keywords: ['utm','url','generator'],
  component: () => import('./utm-url-generator.vue'),
  icon: Ad,
  category: 'Web',
};
