import { Key } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'jwt-generator',
  title: 'JWT Generator',
  description: 'JWT Token generator and editor',
  keywords: ['jwt','generator','editor','encode','typ','alg','iss','sub','aud','exp','nbf','iat','jti','json','web','token',],
  component: () => import('./jwt-generator.vue'),
  icon: Key,
  category: 'Crypto',
};
