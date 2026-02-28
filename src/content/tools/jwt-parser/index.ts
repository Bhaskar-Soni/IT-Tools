import { Key } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'jwt-parser',
  title: 'JWT parser',
  description: 'Parse and decode your JSON Web Token (jwt) and display its content.',
  keywords: ['jwt','parser','decode','typ','alg','iss','sub','aud','exp','nbf','iat','jti','json','web','token',],
  component: () => import('./jwt-parser.vue'),
  icon: Key,
  category: 'Crypto',
};
