import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'punycode-converter',
  title: 'Punycode Converter',
  description: 'Convert international unicode domain names or emails from/to ASCII Punycode version',
  keywords: ['punycode','converter','rfc3492','bootstring','domain','dns'],
  component: () => import('./punycode-converter.vue'),
  icon: World,
  category: 'Network',
};
