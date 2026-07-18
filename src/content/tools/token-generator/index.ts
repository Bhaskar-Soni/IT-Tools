import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'token-generator',
  title: 'Token generator',
  description: 'Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.',
  keywords: ['token','random','string','alphanumeric','symbols','number','letters','lowercase','uppercase','password'],
  component: () => import('./token-generator.tool.vue'),
  icon: ArrowsShuffle,
  category: 'Generators',
};
