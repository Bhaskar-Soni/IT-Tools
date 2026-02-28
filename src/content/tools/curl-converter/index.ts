import { ExternalLink } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'curl-converter',
  title: 'Curl Converter',
  description: 'Generate common coding languages version of provided curl command line',
  keywords: ['curl','code','language','generator'],
  component: () => import('./curl-converter.vue'),
  icon: ExternalLink,
  category: 'Development',
};
